module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        "primary-color": "#1E1E24",
        lightWhite: "rgba(255, 255, 255, 0.85)",
        "secondary-color": "#ff9800",
        "third-color": "#31313A",
        
      },
    },
  },
  plugins: [],
};
