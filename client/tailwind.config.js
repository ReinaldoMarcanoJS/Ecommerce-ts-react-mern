/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
        // => @media (min-width: 320px) { ... }

        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      backgroundColor: {
        Navbar: "#003049",
        "yellow-seacherIcon": "#e9ff88",
        color: "#FFE53B",
      },
      width: {
        searcherDesktop: "700px",
        searcherTablet: "350px",
        searcherMobile: "200px",
      },
      textColor: {
        white: {
          default: "#FFFFFF",
        },
        redError: "hsl(0, 100%, 74%)"
      },
      fontFamily: {
        Logo: "Payton One",
        LogoLetter: ["ADLaM Display"],
        letter: ["Anton", "sans-serif"],
        default: ['Poppins', 'sans-serif']
      },
      fontWeight: {
        "h1-hover": "900",
      },
    },
  },
  plugins: [],
};
