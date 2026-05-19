import { useEffect, useState } from 'react';
import { HiOutlineArrowUp } from 'react-icons/hi';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-slate-900/90 text-white shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-sky-500 ${visible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      aria-label="Back to top"
    >
      <HiOutlineArrowUp size={20} />
    </button>
  );
}
