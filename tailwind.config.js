/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bgPrimary: 'var(--bg-primary)',
        bgSecondary: 'var(--bg-secondary)',
        bgTertiary: 'var(--bg-tertiary)',
        bgCuaternary: 'var(--bg-cuaternary)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        accentDarker: 'var(--accent-darker)',
        muted: 'var(--muted)',
      },
      screens: {
        '4xl': '2560px',
      },
    },
  },
  plugins: [],
}
