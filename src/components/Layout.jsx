import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import BackgroundEffects from './BackgroundEffects';
import ScrollIndicator from './ScrollIndicator';
import BackToTop from './BackToTop';
import AnimatedCursor from './AnimatedCursor';

export default function Layout({ children }) {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.add('transition-colors');
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),transparent_30%)] dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),transparent_30%)] min-h-screen">
      <BackgroundEffects />
      <AnimatedCursor />
      <ScrollIndicator />
      <Navbar />
      <main>{children}</main>
      <BackToTop />
    </div>
  );
}
