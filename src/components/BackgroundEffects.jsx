export default function BackgroundEffects() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[-8rem] top-12 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-slate-800/10 blur-3xl dark:bg-sky-500/10" />
      <div className="absolute left-10 bottom-32 h-40 w-40 rounded-full bg-sky-500/10 blur-2xl" />
      <div className="particle left-8 top-20 h-3 w-3 bg-sky-400/60 animate-[floatY_6s_ease-in-out_infinite]" />
      <div className="particle left-28 top-44 h-2 w-2 bg-white/70 animate-[floatY_5s_ease-in-out_infinite]" />
      <div className="particle right-24 top-32 h-3 w-3 bg-sky-300/70 animate-[floatY_7s_ease-in-out_infinite]" />
      <div className="particle right-16 bottom-20 h-4 w-4 bg-slate-200/50 dark:bg-sky-500/50 animate-[floatY_9s_ease-in-out_infinite]" />
    </div>
  );
}
