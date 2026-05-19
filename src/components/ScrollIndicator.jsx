import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const height = document.body.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-40 h-1 w-full overflow-hidden bg-slate-200/40 dark:bg-slate-800/50">
      <div className="h-full bg-sky-500 transition-all duration-150 ease-out" style={{ width: `${progress}%` }} />
    </div>
  );
}
