/** @type {import('tailwindcss').Config} */
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",

        // light mode
        "primary-light": "#BDC8FF",
        "accent-light": "#5464E5",
        "secondary-light": "#5d5d5d",
        "tertiary-light": "#b7c3ff",

        // dark mode
        "primary-dark": "#060816",
        "accent-dark": "#9153FF",
        "secondary-dark": "#aaa6c3",
        "tertiary-dark": "#151030",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        // light mode
        "hero-pattern-light": "url('/assets/herobg-light.png')",
        "logo-light": "url('/logo-light.png')",
        "purple-gradient":
          "-webkit-linear-gradient(-90deg, #5464e5 0%, #3c335000 100%)",
        "b1-light": "url('/assets/about/b1-light.png')",

        // dark mode
        "hero-pattern-dark": "url('/assets/herobg-dark.png')",
        "logo-dark": "url('/logo-dark.png')",
        "violet-gradient":
          "-webkit-linear-gradient(-90deg, #9153FF 0%, #3c335000 100%)",
        "b1-dark": "url('/assets/herobg-dark.png')",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
