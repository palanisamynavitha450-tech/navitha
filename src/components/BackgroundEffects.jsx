export default function BackgroundEffects() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[-8rem] top-12 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-slate-900/10 blur-3xl dark:bg-sky-500/12" />
      <div className="absolute left-10 bottom-32 h-44 w-44 rounded-full bg-sky-500/12 blur-2xl" />
      <div className="absolute left-24 top-24 h-24 w-24 rounded-full bg-slate-100/50 blur-2xl dark:bg-sky-500/20" />
      <div className="particle left-8 top-20 h-3 w-3 bg-sky-400/60 animate-float" />
      <div className="particle left-28 top-44 h-2 w-2 bg-white/80 animate-pulseGlow" />
      <div className="particle right-24 top-32 h-3 w-3 bg-sky-300/70 animate-float" />
      <div className="particle right-16 bottom-20 h-4 w-4 bg-slate-200/50 dark:bg-sky-500/50 animate-pulseGlow" />
      <div className="absolute inset-x-0 top-1/2 h-[1px] bg-white/5" />
    </div>
  );
}
