module.exports = {
  theme: {
    extend: {
      // Add custom styles here
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".button-top": {
          "background-color": "#4A90E2", // example color
          padding: "1rem 2rem",
          "border-radius": "0.375rem",
          color: "#fff",
          "font-weight": "bold",
          "text-transform": "uppercase",
          transition: "all 0.3s ease-in-out",
        },
        ".button-top:hover": {
          "background-color": "#357ABD",
        },
      });
    },
  ],
};
