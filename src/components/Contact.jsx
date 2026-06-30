import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlineArrowRight, HiCheckCircle } from 'react-icons/hi';
import { DATA } from '../data';
import { submitContactForm } from '../lib/api';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setError('');
    const formData = new FormData(event.target);
    const payload = Object.fromEntries(formData);
    try {
      await submitContactForm(payload);
      setIsSent(true);
      event.target.reset();
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const inputClass = "w-full px-5 py-4 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 focus:border-violet-500 dark:focus:border-violet-500 dark:text-white outline-none transition-colors text-sm placeholder:text-gray-400 dark:placeholder:text-gray-600";

  return (
    <section id="contact" className="py-24 border-t border-gray-100 dark:border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left */}
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-600">Contact</span>
          <h2 className="text-4xl sm:text-5xl font-black dark:text-white leading-tight tracking-tighter mt-3 mb-8">
            Let's build<br />
            something{' '}
            <span className="text-violet-600 italic">great.</span>
          </h2>
          
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-violet-50 dark:bg-violet-950/30 flex items-center justify-center text-violet-600 border border-violet-100 dark:border-violet-900/30 flex-shrink-0">
                <HiOutlineMail size={22} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-0.5">Direct Email</p>
                <a href="mailto:ebubepeter919@gmail.com" className="text-base font-semibold dark:text-white hover:text-violet-600 transition-colors">
                  ebubepeter919@gmail.com
                </a>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Find me on</p>
              <div className="flex flex-wrap gap-3">
                {DATA.socials.map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-11 h-11 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-50 dark:bg-white/[0.02] p-8 rounded-2xl border border-gray-100 dark:border-white/5">
            {isSent ? (
              <div className="py-12 text-center">
                <HiCheckCircle size={64} className="text-green-500 mx-auto mb-5" />
                <h3 className="text-2xl font-black dark:text-white">Message sent!</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">Thanks! I'll get back to you shortly.</p>
                <button 
                  type="button" 
                  onClick={() => setIsSent(false)} 
                  className="mt-6 text-sm text-violet-600 font-semibold hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input required name="name" type="text" placeholder="Your name" className={inputClass} />
                  <input required name="email" type="email" placeholder="Your email" className={inputClass} />
                </div>
                <textarea 
                  required 
                  name="message" 
                  placeholder="What can I build for you?" 
                  rows="5" 
                  className={`${inputClass} resize-none`} 
                />
                {error && (
                  <p className="text-sm text-red-500 bg-red-50 dark:bg-red-950/30 px-4 py-2.5 rounded-xl">{error}</p>
                )}
                <button 
                  type="submit" 
                  disabled={isSending}
                  className="w-full py-4 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 disabled:opacity-50 transition-colors flex items-center justify-center gap-2.5 text-sm shadow-lg shadow-violet-600/20"
                >
                  {isSending ? "Sending..." : "Send Message"}
                  <HiOutlineArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
