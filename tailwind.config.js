/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,ts}" ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.25rem",
        lg: "1.5rem",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "960px",
      lg: "1280px",
    },
  },
  plugins: [],
};
