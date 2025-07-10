/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'custom-1': '#95c6fc',
        'custom-2': '#e89afc',
        'custom-3': '#d296fc',
        'custom-4': '#b9aafc',
        'custom-5': '#bae4fc',
        'custom-6': '#c49cfc'
      },
      keyframes: {
        'fill-button': {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      },
      animation: {
        'fill': 'fill-button 0.4s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}

