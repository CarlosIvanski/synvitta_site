/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        synBlue: {
          DEFAULT: "#1046A8"
        },
        synGreen: {
          DEFAULT: "#18A999"
        }
      },
      backgroundImage: {
        "syn-gradient":
          "radial-gradient(circle at top left, rgba(24,169,153,0.18), transparent 55%), radial-gradient(circle at top right, rgba(16,70,168,0.32), transparent 55%), linear-gradient(to bottom, #020617, #020617)"
      },
      boxShadow: {
        "glass-soft": "0 18px 45px rgba(15,23,42,0.45)"
      },
      borderRadius: {
        "3xl": "1.75rem"
      }
    }
  },
  plugins: []
};

