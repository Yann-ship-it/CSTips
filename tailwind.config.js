/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}", // Pour App Router
      "./pages/**/*.{js,ts,jsx,tsx}", // Pour Pages Router
      "./components/**/*.{js,ts,jsx,tsx}", // Si tu as un dossier components
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  