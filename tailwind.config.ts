import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#1a1a2e',
        'gold': '#d4a574',
        'gold-dark': '#b8864e',
        'gold-light': '#e8c9a4',
        'cream': '#faf8f5',
        'sage': '#8b9e8b',
        'brown': '#5c4033',
        'warm-white': '#fffdf9',
        'warm-gray': '#f7f6f3',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
