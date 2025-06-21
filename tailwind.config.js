export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1', // indigo-500
        },
        accent: {
          DEFAULT: '#10b981', // emerald-500
        },
        background: {
          DEFAULT: '#f8fafc', // slate-50
          dark: '#1e293b', // slate-800
        },
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        soft: '0 4px 24px 0 rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};
