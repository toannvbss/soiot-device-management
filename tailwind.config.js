/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'orange' : {
          150: '#F9F4F4',
          350: '#F28E19',
          450: '#e88109'
        },
        'gray' : {
          50: '#F5F5F5',
          150: '#8B8989',
          450: '#4B5563'
        }
      }
    },
  },
  plugins: [],
}
