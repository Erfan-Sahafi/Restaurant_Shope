/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  important: true,
  theme: {
    extend: {
      fontFamily: {
        Dana: "Dana",
        DanaMedium: "DanaMedium",
        DanaDemiBold: "DanaDemiBold",
        Morabba: "Morabba",
        MorabbaMedium: "MorabbaMedium",
        MorabbaBold: "MorabbaBold",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem",
        },
      },
      backgroundImage: {
        "descktop-img": "url(../public/images/4464061.jpg)",
        "mobile-img": "url(../public/images/phoneBaner.jpg)",
        "loginmobile-img": "url(../public/images/loginbgmobile.jpg)",
        "logindescktop-img": "url(../public/images/loginbg.jpg)",
      },
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    require('flowbite/plugin')
  ],
};
