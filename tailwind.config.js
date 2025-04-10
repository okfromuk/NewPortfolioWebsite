module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: '#2563EB',
          secondary: '#1E3A8A',
          accent: '#FACC15',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        animation: {
            blob: "blob 7s infinite",
          },
          keyframes: {
            blob: {
              "0%": { transform: "translate(0px, 0px) scale(1)" },
              "33%": { transform: "translate(30px, -50px) scale(1.1)" },
              "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
              "100%": { transform: "translate(0px, 0px) scale(1)" },
            },
          },
          perspective: {
            none: "none",
            1000: "1000px",
          },
      },
    },
    plugins: [],
  };