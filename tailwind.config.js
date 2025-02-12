/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'konstant': ['"Konstant Grotesk Neue"', 'system-ui', 'sans-serif'],
      },
      colors: {
        'kaya': {
          accent: 'rgb(165, 3, 3)',
          'accent-rgb': '165, 3, 3',
        },
        'kaya-accent': 'rgb(165, 3, 3)',
      },
      backgroundImage: {
        'hero-pattern': 'url("/kaya-ind-bckg2.webm")',
      },
      boxShadow: {
        'elevation-low': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'elevation-medium': '0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
        'elevation-high': '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-up': 'slideUp 0.5s ease forwards',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        },
        slideUp: {
          'from': { 
            opacity: 0,
            transform: 'translateY(20px)' 
          },
          'to': { 
            opacity: 1,
            transform: 'translateY(0)' 
          },
        }
      }
    },
  },
  plugins: [],
};