import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contactInfo = [
  { label: 'Email', value: 'navitha@example.com' },
  { label: 'Phone', value: '+91 9876543210' },
  { label: 'Location', value: 'Tamil Nadu, India' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields before sending.');
      return;
    }
    setSubmitted(true);
    toast.success('Message sent successfully! I will get back to you soon.');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <section className="section-container">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="page-card p-10"
        >
          <span className="inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-500">
            Contact Info
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">Let's create something amazing together.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Reach out for freelance projects, collaborations, or fun UI and frontend work. I'm responsive, friendly, and ready to bring your next idea to life.
          </p>
          <div className="mt-10 space-y-4">
            {contactInfo.map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200/70 bg-slate-50/80 p-6 dark:border-slate-700/70 dark:bg-slate-950/70">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="page-card p-10"
        >
          <div className="mb-10 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-500">Send a Message</p>
              <h3 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Reach out with your next project.</h3>
            </div>
            <div className="rounded-3xl bg-sky-500/10 px-4 py-3 text-sm font-semibold text-sky-500">Fast response</div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <label className="block">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                placeholder="you@example.com"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                placeholder="Tell me about your project..."
              />
            </label>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
            {submitted && <p className="mt-3 text-sm text-sky-500">Message successfully queued — thank you!</p>}
          </form>
        </motion.div>
      </div>

      <footer className="mt-14 rounded-[2rem] border border-white/10 bg-white/70 p-8 text-center shadow-soft backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-950/70">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Connect with me</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {[
            { label: 'GitHub', url: 'https://github.com' },
            { label: 'LinkedIn', url: 'https://linkedin.com' },
            { label: 'Instagram', url: 'https://instagram.com' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-500"
            >
              {item.label}
            </a>
          ))}
        </div>
      </footer>

      <ToastContainer position="bottom-right" theme="dark" />
    </section>
  );
}
