/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "icon-bg": "#AA7627",
        "text-color": "#AA7627",
      },
      backgroundImage: (theme) => ({
        "gradient-radial": "radial-gradient(circle, #AA7627, black,black)",
      }),
    },
  },
  plugins: [],
};
