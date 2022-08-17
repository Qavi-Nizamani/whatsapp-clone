/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'panel-header-background': 'var(--panel-header-background)',
        'background-default': 'var(--background-default)',
        'background-default-active': 'var(--background-default-active)',
        'search-input-background': 'var(--search-input-background)',
      },
    },
  },
  plugins: [],
};
