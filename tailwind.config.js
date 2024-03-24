/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        portfolio: {
          "primary-black": "#000000",
          "primary-neutral": "#404040",
          "primary-white": "#ffffff",
          "base-100": "#f4f4f5",
          "base-200": "#e4e4e7",
          "base-300": "#d4d4d8",
          "base-500": "#71717a",
          "base-800": "#27272a",
          error: "#ef4444",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
