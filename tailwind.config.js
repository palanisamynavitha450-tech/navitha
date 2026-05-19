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
      },
      colors: {
        navy: '#0f172a',
      },
      transitionTimingFunction: {
        'soft-in-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
