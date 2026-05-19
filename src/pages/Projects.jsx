import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineExternalLink, HiOutlineCode, HiOutlineRefresh } from 'react-icons/hi';

const projectData = [
  {
    title: 'Hostel Management System',
    category: 'React',
    description: 'Student records, room allocation, and fee management built with React and Tailwind for clean interaction.',
    tech: ['React', 'Tailwind', 'Firebase'],
    demo: '#',
    github: '#',
  },
  {
    title: 'School Management System',
    category: 'Full Stack',
    description: 'Attendance, student data, and academic workflow tracking with a modern dashboard experience.',
    tech: ['React', 'Node.js', 'Express'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Personal Portfolio',
    category: 'Frontend',
    description: 'Dark mode, animations, responsive layout, and a premium developer showcase interface.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    demo: '#',
    github: '#',
  },
];

const filters = ['All', 'React', 'Frontend', 'Full Stack'];
const initialBoard = Array(9).fill(null);

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, Draws: 0 });

  const projects = useMemo(
    () => projectData.filter((project) => activeFilter === 'All' || project.category === activeFilter),
    [activeFilter]
  );

  const winner = calculateWinner(board);
  const isBoardFull = board.every(Boolean);
  const status = winner ? `${winner} wins!` : isBoardFull ? 'Draw' : `Next: ${xIsNext ? 'X' : 'O'}`;
  const gameEnded = Boolean(winner) || isBoardFull;

  const selectSquare = (index) => {
    if (board[index] || winner) return;
    const nextBoard = board.slice();
    nextBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(nextBoard);
    setXIsNext((prev) => !prev);
  };

  const resetGame = () => {
    if (winner) {
      setScores((prev) => ({ ...prev, [winner]: prev[winner] + 1 }));
    } else if (isBoardFull) {
      setScores((prev) => ({ ...prev, Draws: prev.Draws + 1 }));
    }
    setBoard(initialBoard);
    setXIsNext(true);
  };

  return (
    <section className="section-container page-transition">
      <div className="space-y-8 text-center">
        <span className="inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-500">
          Selected Work
        </span>
        <h2 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          Projects built with modern UI and polished interactions.
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Explore project showcases, hover-glow cards, live demo links, and an interactive mini Tic Tac Toe game.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition duration-300 ${
              activeFilter === filter
                ? 'border-sky-500 bg-sky-500/10 text-sky-500'
                : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="page-card group overflow-hidden p-6"
          >
            <div className="h-48 overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-400/20 via-white/10 to-slate-100 shadow-soft dark:from-sky-500/10 dark:via-slate-900 dark:to-slate-950">
              <div className="relative h-full w-full" />
            </div>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-sky-500">{project.category}</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">{project.title}</h3>
              </div>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={project.demo}
                  className="btn-secondary inline-flex items-center gap-2 text-sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo <HiOutlineExternalLink />
                </a>
                <a
                  href={project.github}
                  className="btn-secondary inline-flex items-center gap-2 text-sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <HiOutlineCode />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="page-card p-8"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-500">Fun Mini Game</p>
              <h3 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Tic Tac Toe</h3>
            </div>
            <button type="button" onClick={resetGame} className="btn-secondary inline-flex items-center gap-2 text-sm">
              <HiOutlineRefresh /> Reset
            </button>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Try a quick round of XO with score tracking, dark mode support, and responsive game controls.
          </p>

          <div className="mt-8 grid gap-3">
            <div className="grid grid-cols-3 gap-3">
              {board.map((value, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => selectSquare(index)}
                  className="aspect-square rounded-3xl border border-slate-200 bg-white text-3xl font-bold text-slate-950 shadow-soft transition duration-300 hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                >
                  {value}
                </button>
              ))}
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-100 p-5 text-center dark:border-slate-700 dark:bg-slate-900">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Game status</p>
              <p className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{status}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="page-card p-8">
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">Game Score</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {Object.entries(scores).map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-3xl bg-gradient-to-br from-sky-500/10 to-white/90 p-5 text-center dark:from-slate-700/30 dark:to-slate-900/70"
                >
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{label}</p>
                  <p className="mt-3 text-4xl font-semibold text-slate-950 dark:text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="page-card p-8">
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">How it works</h3>
            <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
              <li>• Click any empty square to place X or O.</li>
              <li>• First player to align 3 in a row wins.</li>
              <li>• Reset refreshes the board and updates the score.</li>
              <li>• Built with smooth interactions and responsive hover effects.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
