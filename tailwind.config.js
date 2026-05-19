export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 30px 80px rgba(15, 23, 42, 0.18)',
        glow: '0 0 45px rgba(59, 130, 246, 0.22)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(59,130,246,0.18), transparent 40%), radial-gradient(circle at bottom right, rgba(59,130,246,0.12), transparent 25%)',
        'soft-blur': 'radial-gradient(circle at center, rgba(59,130,246,0.18), transparent 25%)',
      },
      colors: {
        navy: '#0F172A',
        primary: '#0F172A',
        accent: '#38BDF8',
      },
      transitionTimingFunction: {
        'soft-in-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        ring: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.75' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        ring: 'ring 10s linear infinite',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        pulseGlow: 'pulseGlow 2.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
