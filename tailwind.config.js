/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'red-hat-text': ['Red Hat Text', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
