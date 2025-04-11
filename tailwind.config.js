/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        resume: ['"Segoe UI"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        resume: {
          title: '#1F2937',      // dark slate (for section titles, your name)
          text: '#374151',       // paragraph body (job descriptions, etc.)
          subtext: '#6B7280',    // light gray (dates, SGPA, location)
        },
      },
    },
  },
  plugins: [],
}

