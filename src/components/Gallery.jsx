import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { DATA } from '../data';

const Gallery = () => {
  const photos = DATA.gallery;
  const [active, setActive] = useState(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(() => setActive((i) => (i === null ? i : (i + 1) % photos.length)), [photos.length]);
  const prev = useCallback(() => setActive((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)), [photos.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, next, prev]);

  return (
    <section id="gallery" className="py-24 border-t border-gray-100 dark:border-white/5">
      <div className="flex items-end justify-between mb-12">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-600">Moments</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 dark:text-white">Photo Gallery</h2>
        </div>
        <span className="text-sm text-gray-400 hidden sm:block">{photos.length} photos</span>
      </div>

      <div className="columns-2 md:columns-3 gap-4 [&>*]:mb-4">
        {photos.map((photo, i) => (
          <motion.button
            key={photo.src}
            type="button"
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative block w-full overflow-hidden rounded-2xl border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/5 break-inside-avoid cursor-zoom-in hover:border-violet-200 dark:hover:border-violet-800/40 hover:shadow-xl hover:shadow-violet-100/50 dark:hover:shadow-violet-900/10 transition-all duration-300"
            aria-label={`Open photo ${i + 1}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 sm:left-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft size={20} />
            </button>

            <motion.img
              key={photos[active].src}
              src={photos[active].src}
              alt={photos[active].alt}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] max-w-[88vw] w-auto h-auto rounded-2xl object-contain shadow-2xl"
            />

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight size={20} />
            </button>

            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-semibold text-white/60">
              {active + 1} / {photos.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
