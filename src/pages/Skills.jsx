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

const circularSkills = [
  { name: 'React.js', percent: 92, icon: SiReact },
  { name: 'JavaScript', percent: 88, icon: SiJavascript },
  { name: 'Tailwind CSS', percent: 90, icon: SiTailwindcss },
];

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
];

export default function Skills() {
  return (
    <section className="section-container page-transition">
      <div className="space-y-10 text-center">
        <span className="inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-500">
          Skills & Tools
        </span>
        <div className="space-y-4">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Strong skillset for interactive frontend development.
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Modern skill cards, animated progress bars, and polished indicators to show capabilities across frontend, tools, and creative UI craft.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid gap-6"
        >
          {circularSkills.map((skill) => (
            <div key={skill.name} className="page-card overflow-hidden p-6">
              <div className="flex items-center gap-4">
                <div
                  className="relative flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 text-slate-700 shadow-soft dark:bg-slate-900 dark:text-slate-100"
                  style={{
                    background: `conic-gradient(rgba(56,189,248,0.85) ${skill.percent}%, rgba(148,163,184,0.14) ${skill.percent}% 100%)`,
                  }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-sky-500 shadow-lg dark:bg-slate-950 dark:text-sky-400">
                    <skill.icon size={24} />
                  </div>
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-950 dark:text-white">{skill.name}</p>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{skill.percent}% proficiency</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid gap-6">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="page-card p-8"
            >
              <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{group.title}</h3>
              <div className="mt-8 space-y-6">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="rounded-3xl border border-slate-200/70 bg-slate-50/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-300/60 hover:bg-white/95 dark:border-slate-700 dark:bg-slate-950/80 dark:hover:border-sky-500/50 dark:hover:bg-slate-900"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500">
                            <Icon size={20} />
                          </span>
                          <div>
                            <p className="font-semibold text-slate-900 dark:text-white">{item.name}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{item.level}% proficiency</p>
                          </div>
                        </div>
                        <div className="text-sm font-semibold text-sky-500">{item.level}%</div>
                      </div>
                      <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-sky-500 via-sky-400 to-sky-300 transition-all duration-1000"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
