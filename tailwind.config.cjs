/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#03001C",
        secondary: "#B6EADA",
        tertiary: "#301E67",
        icon: "#5B8FB9",
        bg_light_primary: "#B6EADA",
        gray: "#FFD6E4",
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #B6EADA 0.48%, #5B8FB9 75%)",
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
      },
    },
  },
  plugins: [],
};
