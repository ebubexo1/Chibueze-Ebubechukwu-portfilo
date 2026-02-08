import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlineArrowRight, HiCheckCircle } from 'react-icons/hi';
import { DATA } from '../data';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    
    const formData = new FormData(event.target);

    // Using the access key you provided
    formData.append("access_key", "2b39acf8-797a-4816-a491-c24cb176425c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setIsSent(true);
        setIsSending(false);
        event.target.reset();
      }
    } catch (error) {
      console.error("Error", error);
      setIsSending(false);
      alert("Something went wrong. Check your internet connection.");
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-gray-100 dark:border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Text & Socials */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black dark:text-white leading-[1.1] tracking-tighter">
              Let’s build <br /> something <span className="text-purple-600 italic">extraordinary.</span>
            </h2>
            
            <div className="mt-12 space-y-10">
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-3xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 border border-purple-100 dark:border-purple-800/30">
                  <HiOutlineMail size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Direct Email</p>
                  <a href="mailto:ebubepeter919@gmail.com" className="text-lg sm:text-xl font-bold dark:text-white hover:text-purple-600 transition-colors">
                    ebubepeter919@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Social Connections</p>
                <div className="flex flex-wrap gap-4">
                  {DATA.socials.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-black hover:text-white transition-all duration-500 shadow-sm"
                    >
                      <social.icon size={22} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form 
            onSubmit={onSubmit}
            className="bg-gray-50 dark:bg-zinc-900/40 p-8 sm:p-12 rounded-[3rem] border border-gray-100 dark:border-zinc-800 space-y-5"
          >
            {isSent ? (
              <div className="py-12 text-center animate-in zoom-in duration-300">
                <HiCheckCircle size={80} className="text-green-500 mx-auto mb-6" />
                <h3 className="text-3xl font-black dark:text-white">Sent!</h3>
                <p className="text-gray-500 mt-2">Thanks! Your message is on its way to Ebube.</p>
                <button type="button" onClick={() => setIsSent(false)} className="mt-8 text-purple-600 font-bold underline">Send another?</button>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input required name="name" type="text" placeholder="Name" className="w-full p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 focus:border-purple-600 dark:text-white outline-none transition-all" />
                    <input required name="email" type="email" placeholder="Email" className="w-full p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 focus:border-purple-600 dark:text-white outline-none transition-all" />
                  </div>
                  <textarea required name="message" placeholder="What can I build for you?" rows="5" className="w-full p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 focus:border-purple-600 dark:text-white outline-none transition-all resize-none" />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSending}
                  className="w-full py-5 bg-purple-600 text-white font-black rounded-2xl hover:bg-purple-700 disabled:opacity-50 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-purple-600/20"
                >
                  {isSending ? "Sending..." : "Submit Inquiry"} 
                  <HiOutlineArrowRight size={20} />
                </button>
              </>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;