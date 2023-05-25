/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        primary: colors.blue[500],
        divider: "#999999",
        "divider-light": "#CCCCCC",
        "input-light": "#B3B3B3",
        "light-bg": colors.gray[100],
        "text-on-white": "#3B3B3B",
        "dark-blue": "#226CD1",
        neutral: {
          grey: "#666666",
          dark: "#2B2B2B",
          "menu-one": "#3C4043",
        },
      }),
      maxWidth: {
        cont: "1428px",
      },
    },
  },
  plugins: [],
};
