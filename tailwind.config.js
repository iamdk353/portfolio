/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    daisyui: {
      themes: ["light", "dark", "black", "synthwave"],
    },
  },

  plugins: [require("daisyui")],
};
