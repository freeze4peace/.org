module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "blue-btn": "url('/blue-btn-bg.svg')",
        "yellow-btn": "url('/yellow-btn-bg.svg')",
      },
    },
  },
  plugins: [],
};
