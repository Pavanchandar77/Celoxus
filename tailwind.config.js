/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cisco: {
          blue: '#049fd9',
          dark: '#005073',
          charcoal: '#444444',
          bg: '#f8f8f8',
        },
        bg: {
          deep: '#020617',
          elevated: '#0b1120',
          light: '#f6f6f8',
        },
        accent: {
          DEFAULT: '#049fd9',
          hover: '#0ab2f1',
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      }
    },
  },
  plugins: [],
}
