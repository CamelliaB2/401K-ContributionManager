/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hi: {
          cream: "#FFF7ED",
          navy: "#082032",
          teal: "#0FB3A3",
          tealLight: "#26C6B5",
          blue: "#2A9DF4",
          blueDark: "#0A2A43",
          orange: "#F5A623",
          purple: "#8E7CC3",
          slate: "#6B7280",
        },
      },
    },
  },
  plugins: [],
};
