import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { HiArrowRight } from 'react-icons/hi';

export default function Home() {
  const phrases = useMemo(
    () => ['React Developer', 'UI Enthusiast', 'Problem Solver', 'Creative Thinker'],
    []
  );
  const [activePhrase, setActivePhrase] = useState(0);
  const [typed, setTyped] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    let timeout;
    const fullText = phrases[activePhrase];
    if (!isDeleting && typed.length < fullText.length) {
      timeout = setTimeout(() => setTyped(fullText.slice(0, typed.length + 1)), 120);
    } else if (isDeleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(fullText.slice(0, typed.length - 1)), 50);
    } else {
      timeout = setTimeout(() => setIsDeleting((prev) => !prev), 800);
      if (!isDeleting) {
        timeout = setTimeout(() => setIsDeleting(true), 1200);
      } else if (typed.length === 0) {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setActivePhrase((prev) => (prev + 1) % phrases.length);
        }, 400);
      }
    }
    return () => clearTimeout(timeout);
  }, [typed, isDeleting, activePhrase, phrases]);

  const handleTouch = () => {
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.65 } });
    setPopup(true);
    setTimeout(() => setPopup(false), 2600);
  };

  return (
    <section className="section-container">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="mb-6 inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-500 backdrop-blur-sm">
            premium portfolio experience
          </span>
          <h1 className="text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
            Hello, I'm <span className="text-sky-500">Navitha</span> <span>👋</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Frontend Developer & Creative Designer. I create modern, responsive and interactive web experiences with beautiful UI designs and smooth user experiences.
          </p>
          <div className="mt-8 rounded-3xl border border-slate-300/70 bg-white/85 px-6 py-5 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/80">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">I build</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
              {typed}
              <span className="ml-1 text-sky-500">|</span>
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
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
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Projects Completed', value: '15+' },
              { label: 'Technologies', value: '12+' },
              { label: 'Experience', value: '2 Years' },
              { label: 'Happy Clients', value: '20+' },
            ].map((item) => (
              <div key={item.label} className="page-card p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{item.label}</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative mx-auto flex max-w-md items-center justify-center"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-sky-200/40 via-white/20 to-slate-100 blur-3xl dark:from-sky-500/10 dark:via-slate-900/30 dark:to-slate-950" />
          <div className="relative z-10 overflow-hidden rounded-[2.5rem] border border-white/40 bg-gradient-to-br from-white/70 to-slate-100/70 p-8 shadow-soft backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/70">
            <div className="absolute -right-16 top-8 h-28 w-28 rounded-full bg-sky-300/30 blur-3xl" />
            <div className="absolute left-4 top-10 h-20 w-20 rounded-full bg-white/60 blur-2xl dark:bg-sky-500/20" />
            <div className="relative mx-auto h-[420px] w-[320px] rounded-[2.25rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_45%)] p-6 shadow-glow">
              <div className="absolute inset-0 rounded-[2.25rem] border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.35),rgba(255,255,255,0.05))]" />
              <div className="relative flex h-full flex-col items-center justify-between rounded-[2rem] border border-white/30 bg-slate-950/80 p-6 text-center text-white shadow-xl">
                <span className="self-start rounded-full bg-sky-500/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-sky-200">Frontend Artist</span>
                <div className="relative flex h-full w-full flex-col items-center justify-center gap-6">
                  <div className="relative flex h-52 w-52 items-center justify-center rounded-full bg-slate-900/80 shadow-[0_35px_80px_rgba(15,23,42,0.25)]">
                    <div className="animate-[floatY_4s_ease-in-out_infinite] h-44 w-44 rounded-full border border-sky-400/20 bg-gradient-to-br from-sky-500/30 to-slate-900/20 p-2">
                      <div className="flex h-full w-full items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900">
                        <span className="text-5xl">🙂</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-left">
                    <p className="text-sm uppercase tracking-[0.28em] text-sky-200">Designer</p>
                    <p className="max-w-xs text-sm leading-6 text-slate-300">Premium UI, motion, glassmorphism, and rich interactions for modern web brands.</p>
                  </div>
                </div>
              </div>
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
            <p className="text-lg font-semibold">✨ Thanks for visiting my portfolio! Have an amazing day 🚀</p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
