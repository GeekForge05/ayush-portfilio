/** @type {import('tailwindcss').Config} */

function withOpacity(variable) {
  return ({ opacityValue }) =>
    opacityValue === undefined
      ? `rgb(var(${variable}))`
      : `rgb(var(${variable}) / ${opacityValue})`;
}

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: withOpacity('--bg'),
        card: withOpacity('--card'),
        border: withOpacity('--border'),
        primary: {
          DEFAULT: withOpacity('--primary'),
          dim: withOpacity('--primary-dim'),
        },
        ink: {
          DEFAULT: withOpacity('--ink'),
          muted: withOpacity('--ink-muted'),
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        blink: 'blink 1.1s step-end infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
        scan: 'scan 3s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scan: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
      },
    },
  },
  plugins: [],
}
