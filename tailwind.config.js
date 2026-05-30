/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05080C",
        midnight: "#071015",
        graphite: "#101820",
        line: "#2C3440",
        gold: "#D8B76A",
        ivory: "#F8F3E8",
        muted: "#B7AA8A",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ["Inter", "Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0, 0, 0, 0.35)",
        gold: "0 18px 60px rgba(216, 183, 106, 0.16)",
      },
      backgroundImage: {
        "cinematic-radial":
          "radial-gradient(circle at 72% 14%, rgba(216,183,106,.17), transparent 24%), radial-gradient(circle at 12% 0%, rgba(58,85,101,.28), transparent 28%), linear-gradient(135deg, #071015 0%, #05080C 58%, #101820 100%)",
      },
    },
  },
  plugins: [],
};
