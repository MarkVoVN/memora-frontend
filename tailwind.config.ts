/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      screens: {
        "2xl": "1204px",
      },
    },
    fontFamily: {
      "be-vietnam-pro": ["Be Vietnam Pro", "sans-serif"],
      orbitron: ["Orbitron", "sans-serif"],
    },
    colors: {
      primary: {
        DEFAULT: "#2196F3",
        900: "#40A5F4",
        800: "#60B4F6",
        700: "#80C3F8",
        600: "#9FD2F9",
        500: "#BFE1FB",
        400: "#DFF0FD",
      },
      secondary: {
        DEFAULT: "#03A9F4",
        900: "#27B5F5",
        800: "#4BC1F7",
        700: "#6FCDF8",
        600: "#93DAFA",
        500: "#B7E6FB",
        400: "#DBF2FD",
      },
      error: {
        1: "#FEF8F6",
        2: "#ff003c",
      },
      accent: {
        1: "#F44E03",
        2: "#F56727",
        3: "#F7804B",
        4: "#F8996F",
      },
      discount: "#19b43c",
      link: "#0984e3",
    },
    extend: {
      boxShadow: {
        "search-bar": "0px 2px 4px 0px #00000026",
      },
      backgroundImage: {
        "gradient-132": "linear-gradient(132deg, var(--tw-gradient-stops))",
      },
      colors: {
        shade: {
          "1-100%": "#FFFFFF",
          "1-85%": "rgba(255, 255, 255, 0.85)",
          "1-75%": "rgba(255, 255, 255, 0.75)",
          "2-100%": "#222222",
          "2-30%": "rgba(34, 34, 34, 0.3)",
          "2-5%": "rgba(34, 34, 34, 0.05)",
        },
        neutral: {
          1: "#F7F7F7",
          2: "#F2F2F2",
          3: "#DDDDDD",
          4: "#D3D3D3",
          5: "#C2C2C2",
          6: "#B0B0B0",
          7: "#636e72",
          8: "#2d3436",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   foreground: "hsl(var(--secondary-foreground))",
        // },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
