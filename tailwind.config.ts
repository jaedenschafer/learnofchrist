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
        'cream': '#faf8f5',
        'sage': '#8b9e8b',
        'brown': '#5c4033',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Georgia', 'Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
