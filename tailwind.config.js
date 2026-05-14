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
        }
      },
      fontFamily: {
        sans: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Syne", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      }
    },
  },
  plugins: [],
}
