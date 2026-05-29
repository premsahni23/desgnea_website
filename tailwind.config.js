/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: '#141218',
        'brand-purple': '#7364E3',
        'mid-lavender': '#D7C7EC',
        'soft-lavender': '#F7F0FF',
        'on-surface': '#FFFFFF',
        'on-surface-variant': '#D7C7EC',
        'outline-variant': 'rgba(215, 199, 236, 0.12)',
      },
      fontFamily: {
        display: ['Hanken Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        'container-max': '1280px',
      },
    },
  },
  plugins: [],
}
