
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,md,mdx,ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        phosphor: { DEFAULT: '#00FFC2', amber: '#FFB000' }
      },
      fontFamily: {
        mono: ['ui-monospace','SFMono-Regular','Menlo','Monaco','Consolas','Liberation Mono','monospace'],
        sans: ['Inter','system-ui','-apple-system','Segoe UI','Roboto','Ubuntu','Cantarell','Noto Sans','Helvetica Neue','Arial','sans-serif']
      },
      boxShadow: {
        glow: '0 0 10px rgba(0,255,194,0.25)',
      }
    },
  },
  plugins: [],
}
