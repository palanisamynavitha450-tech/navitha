import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { HiArrowRight } from 'react-icons/hi';

const phrases = ['React Developer', 'Creative Thinker', 'UI Enthusiast', 'Problem Solver'];
const stats = [
  { label: 'Projects Completed', value: '15+' },
  { label: 'Technologies', value: '12+' },
  { label: 'Experience', value: '2 Years' },
  { label: 'Happy Clients', value: '20+' },
];

export default function Home() {
  const [activePhrase, setActivePhrase] = useState(0);
  const [typed, setTyped] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const currentText = phrases[activePhrase];
    const speed = isDeleting ? 60 : typed.length === currentText.length ? 1200 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typed.length < currentText.length) {
          setTyped(currentText.slice(0, typed.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (typed.length > 0) {
          setTyped(currentText.slice(0, typed.length - 1));
        } else {
          setIsDeleting(false);
          setActivePhrase((prev) => (prev + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [typed, isDeleting, activePhrase]);

  const handleTouch = () => {
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.65 } });
    setPopup(true);
    setTimeout(() => setPopup(false), 2600);
  };

  return (
    <section className="section-container">
      <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-500 backdrop-blur-sm">
              premium portfolio experience
            </span>
            <div className="space-y-4">
              <h1 className="text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
                Hi, I'm <span className="text-sky-500">Navitha</span> <span>👋</span>
              </h1>
              <p className="text-2xl font-semibold text-slate-700 dark:text-slate-200">Frontend Developer | React Developer</p>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                I build modern interactive web experiences with beautiful user interfaces.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-7 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/85">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-500">I build</p>
              <p className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">
                {typed}
                <span className="ml-1 text-sky-500">|</span>
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200/80 bg-slate-50/80 p-7 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/80">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Glass motion canvas</p>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Floating effects, animated highlights, and premium UI patterns for a polished experience.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link to="/projects" className="btn-primary">
              View Projects <HiArrowRight className="ml-2" />
            </Link>
            <a href="/resume.pdf" className="btn-secondary" target="_blank" rel="noreferrer">
              Download Resume
            </a>
            <button type="button" onClick={handleTouch} className="btn-secondary">
              Touch Me
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="page-card p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">{item.label}</p>
                <p className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative mx-auto flex max-w-lg items-center justify-center"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-slate-950/10 blur-3xl dark:bg-sky-500/10" />
          <div className="relative z-10 w-full overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/90 p-8 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/80">
            <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="absolute right-6 top-8 h-20 w-20 rounded-full bg-slate-900/20 blur-2xl dark:bg-sky-400/20" />
            <div className="relative mx-auto h-[380px] w-[380px] rounded-full border border-white/15 bg-slate-950/90 p-5 shadow-glow">
              <div className="absolute inset-0 rounded-full border border-sky-500/15 animate-ring" />
              <div className="relative mx-auto h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 shadow-[0_30px_70px_rgba(15,23,42,0.28)]">
                <img
                  src="/profile.jpg"
                  alt="Profile placeholder"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-sky-500/10 to-slate-900/40" />
              </div>
            </div>
            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/80 p-6 text-center text-slate-900 shadow-soft backdrop-blur-xl dark:border-slate-700/40 dark:bg-slate-950/80 dark:text-slate-100">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-500">Floating frame effect</p>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                A glowing border, rotating gradient ring, and glass surface to keep the hero image premium and modern.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {popup && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="rounded-3xl border border-white/20 bg-slate-950/95 px-6 py-4 text-center text-white shadow-soft"
          >
            <p className="text-lg font-semibold">✨ Thanks for visiting my portfolio! Keep smiling 🚀</p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
