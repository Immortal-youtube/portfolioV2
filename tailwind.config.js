/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}',"./src/App.jsx"],
  theme: {
    extend: {
      fontFamily: {
        title:["Permanent marker","cursive"]
      },
    },
  },
  plugins: [],
}

