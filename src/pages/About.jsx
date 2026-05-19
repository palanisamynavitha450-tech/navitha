import { motion } from 'framer-motion';

const timeline = [
  { year: '2026', title: 'Frontend Specialist', description: 'Building polished web apps with React, Tailwind CSS, and motion design.' },
  { year: '2025', title: 'UI & Product Design', description: 'Designed modern product interfaces with a focus on user delight and clarity.' },
  { year: '2024', title: 'Internship Experience', description: 'Worked on performance optimizations, component libraries, and agile delivery.' },
];

const stats = [
  { label: 'Completed Projects', value: 19 },
  { label: 'Happy Clients', value: 20 },
  { label: 'Launches', value: 12 },
];

export default function About() {
  return (
    <section className="section-container">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-8"
        >
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-500">
              About Me
            </span>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">Hello! I'm Navitha, a passionate frontend developer.</h2>
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              I enjoy creating elegant and interactive websites with refined animations, premium glassmorphism, and responsive layouts. I love learning modern technologies and transforming ideas into memorable experiences.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {['UI Design', 'Web Development', 'Learning New Tech', 'Problem Solving'].map((item) => (
              <div key={item} className="page-card p-6">
                <p className="text-base font-semibold text-slate-900 dark:text-white">{item}</p>
                <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Focused on building designs, systems and workflows that feel premium and modern.</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 rounded-[2rem] bg-slate-950/80 p-8 text-white shadow-soft dark:bg-slate-900/90">
            <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="space-y-2 border border-white/10 rounded-3xl p-5 bg-white/5">
                  <p className="text-4xl font-semibold text-sky-400">{item.value}+</p>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="text-sm leading-6 text-slate-300">I care deeply about every project I deliver, from interactions and animations to polished layouts with mobile-first responsiveness.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="space-y-8"
        >
          <div className="page-card p-8">
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">Timeline</h3>
            <div className="mt-8 space-y-6">
              {timeline.map((item) => (
                <div key={item.year} className="relative pl-8">
                  <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-sky-500" />
                  <div className="border-l border-slate-200/70 pl-6 dark:border-slate-700/70">
                    <p className="text-sm uppercase tracking-[0.3em] text-sky-500">{item.year}</p>
                    <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="page-card p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-500">Education</p>
              <h4 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">Bachelor of Computer Science</h4>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">2023–2026</p>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">Strong foundation in software principles, algorithms, and creative problem solving for web and UI systems.</p>
            </div>
            <div className="page-card p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-500">Experience</p>
              <h4 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">Interactive Web Products</h4>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">Designed and built websites with animations, responsive layouts, and premium digital experiences.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
