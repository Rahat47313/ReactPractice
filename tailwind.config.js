/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '240px',
      'xs': '280px',
      'sm': '425px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1377px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
    },
    
    extend: {
      fontFamily: {
        'inter': ['Inter'],
        'menlo': ['Menlo', 'sans-serif'],
        'impact': ['Impact', 'sans-serif'],
        'impacted': ['Impacted', 'sans-serif'],
      }
    },
  },
  plugins: [],
}