// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Altre personalizzazioni...
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        // '.border-debug': {
        //   border: '1px solid red !important',
        // },
      });
    },
  ],
};
