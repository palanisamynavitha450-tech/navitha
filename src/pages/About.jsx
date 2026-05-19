import { motion } from 'framer-motion';

const aboutCards = [
  {
    title: 'Education',
    description: 'Bachelor of Computer Science, focused on web systems, UX, and coding best practices.',
  },
  {
    title: 'Experience',
    description: 'Built polished interfaces using React, Tailwind CSS, and motion-driven UI patterns.',
  },
  {
    title: 'Achievements',
    description: 'Delivered 15+ projects, participated in hackathons, and crafted clean frontend products.',
  },
  {
    title: 'Interests',
    description: 'Design systems, animation, accessibility, and exploring new web technologies.',
  },
];

const timeline = [
  {
    year: '2026',
    title: 'Frontend Specialist',
    description: 'Building polished web apps with React, Tailwind CSS, and premium motion design.',
  },
  {
    year: '2025',
    title: 'UI & Product Design',
    description: 'Created modern product interfaces with a focus on clarity, performance, and delight.',
  },
  {
    year: '2024',
    title: 'Internship Experience',
    description: 'Worked on performance optimization, design systems, and agile delivery for real products.',
  },
];

export default function About() {
  return (
    <section className="section-container page-transition">
      <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-10"
        >
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-500">
              About Me
            </span>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              Hello! I'm Navitha, a passionate frontend developer.
            </h2>
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              I enjoy creating elegant and interactive websites and exploring modern technologies that turn ideas into memorable digital experiences.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutCards.map((card) => (
              <div key={card.title} className="page-card p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-500">{card.title}</p>
                <p className="mt-4 text-base font-semibold text-slate-950 dark:text-white">{card.title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 rounded-[2rem] bg-slate-950/80 p-8 shadow-soft dark:bg-slate-900/90">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-white/5 p-6 text-center">
                <p className="text-4xl font-semibold text-sky-400">15+</p>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">Projects</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-6 text-center">
                <p className="text-4xl font-semibold text-sky-400">20+</p>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">Clients</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-6 text-center">
                <p className="text-4xl font-semibold text-sky-400">99%</p>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">Satisfaction</p>
              </div>
            </div>
            <p className="text-sm leading-6 text-slate-300">
              I care deeply about strong UX, seamless animations, and polished responsive layouts across every section of a website.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
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
                    <p className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="page-card p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-500">Education</p>
              <h4 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">Computer Science Degree</h4>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">2023–2026</p>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">Focused on software engineering principles, responsive design, and modern frontend development.</p>
            </div>
            <div className="page-card p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-500">Experience</p>
              <h4 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">Interactive Web Products</h4>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">Hands-on experience shipping polished web apps, dashboards, and portfolio sites with motion and accessibility in mind.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
