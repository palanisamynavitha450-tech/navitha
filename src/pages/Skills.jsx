import { motion } from 'framer-motion';
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiGit,
  SiFigma,
  SiVisualstudiocode,
} from 'react-icons/si';

const skillGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'React.js', icon: SiReact, level: 90 },
      { name: 'HTML', icon: SiHtml5, level: 96 },
      { name: 'CSS', icon: SiCss3, level: 92 },
      { name: 'JavaScript', icon: SiJavascript, level: 88 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: SiGit, level: 86 },
      { name: 'Figma', icon: SiFigma, level: 82 },
      { name: 'VS Code', icon: SiVisualstudiocode, level: 94 },
    ],
  },
  {
    title: 'Soft Skills',
    items: [
      { name: 'Communication', level: 90 },
      { name: 'Leadership', level: 84 },
      { name: 'Teamwork', level: 92 },
    ],
  },
];

export default function Skills() {
  return (
    <section className="section-container">
      <div className="space-y-8 text-center">
        <span className="inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-500">
          Skills & Tools
        </span>
        <h2 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">Strong skillset for interactive frontend development.</h2>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Modern skill cards, animated progress bars, and polished indicators to show capabilities across frontend, tools, and soft skills.
        </p>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="page-card p-8"
          >
            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{group.title}</h3>
            <div className="mt-8 space-y-6">
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="rounded-3xl border border-slate-200/70 bg-slate-50/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-300/60 hover:bg-white/95 dark:border-slate-700 dark:bg-slate-950/80 dark:hover:border-sky-500/50 dark:hover:bg-slate-900">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        {Icon ? (
                          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500">
                            <Icon size={20} />
                          </span>
                        ) : (
                          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-300 text-slate-700 dark:bg-slate-700 dark:text-slate-100">S</span>
                        )}
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">{item.name}</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{item.level}% proficiency</p>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-sky-500">{item.level}%</div>
                    </div>
                    <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                      <div className="h-full rounded-full bg-gradient-to-r from-sky-500 via-sky-400 to-sky-300 transition-all duration-1000" style={{ width: `${item.level}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
