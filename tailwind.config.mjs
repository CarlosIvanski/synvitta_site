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
          [
            "radial-gradient(circle at top left, rgba(24,169,153,0.18), transparent 55%)",
            "radial-gradient(circle at bottom right, rgba(37,99,235,0.35), transparent 55%)",
            // começa escuro apenas no topo (hero) e já entra em um azul mais claro nas seções seguintes, parecido com o Contact
            "linear-gradient(to bottom, #020617 0%, #071426 12%, #0f2740 28%, #155b95 60%, #1b6fb0 100%)"
          ].join(", ")
      },
      boxShadow: {
        "glass-soft":
          "0 18px 45px rgba(15,23,42,0.7), 0 0 38px rgba(56,189,248,0.22)"
      },
      borderRadius: {
        "3xl": "1.75rem"
      }
    }
  },
  plugins: []
};

