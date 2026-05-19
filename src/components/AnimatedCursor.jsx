import { useEffect, useState } from 'react';

export default function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (event) => setPosition({ x: event.clientX, y: event.clientY });
    const activate = () => setActive(true);
    const deactivate = () => setActive(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', activate);
    window.addEventListener('mouseup', deactivate);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', activate);
      window.removeEventListener('mouseup', deactivate);
    };
  }, []);

  return (
    <div
      className={`cursor-dot ${active ? 'active bg-sky-500' : 'bg-white/90'}`}
      style={{ left: position.x, top: position.y }}
    />
  );
}
