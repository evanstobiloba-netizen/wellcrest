/** Tailwind config for WellCrest UI */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand': '#0066FF',
        'brand-teal': '#2AB7A6',
        'brand-navy': '#0A2540',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}