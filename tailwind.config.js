// @ts-check
const colors = require('tailwindcss/colors')

/** clay — 이 사이트의 주조색. 스타터 기본값(colors.pink)을 대체한다. */
const clay = {
  50: '#FBF3EF',
  100: '#F6E3DA',
  200: '#EDC6B5',
  300: '#E0A386',
  400: '#D17F5C',
  500: '#C15F3C',
  600: '#A64B2E',
  700: '#883A24',
  800: '#6B2E1D',
  900: '#532519',
  950: '#2E1310',
}

/** 라이트/다크가 같은 유틸리티로 성립하도록 CSS 변수로 받는다. 정의는 css/tailwind.css */
const themed = (name) => `rgb(var(--c-${name}) / <alpha-value>)`

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-kr)', 'system-ui', 'sans-serif'],
        display: ['var(--font-gowun-batang)', 'Georgia', 'serif'],
      },
      colors: {
        primary: clay,
        // 기존 컴포넌트 전반이 text-gray-* 를 쓰고 있다. 웜 뉴트럴로 갈아끼우면
        // 손대지 않은 화면까지 같은 온도로 따라온다.
        gray: colors.stone,
        paper: themed('paper'),
        surface: themed('surface'),
        line: themed('line'),
        ink: themed('ink'),
        muted: themed('muted'),
        clay: themed('clay'),
        clayfield: themed('clay-field'),
      },
      boxShadow: {
        // 오프셋과 번짐을 가진 실물 그림자만 쓴다. 오프셋 0의 색 후광은 쓰지 않는다.
        raise: '0 1px 2px rgb(25 24 23 / 0.04), 0 4px 12px -2px rgb(25 24 23 / 0.06)',
        lift: '0 2px 4px rgb(25 24 23 / 0.05), 0 12px 28px -6px rgb(25 24 23 / 0.10)',
      },
      borderRadius: {
        DEFAULT: '3px',
        md: '4px',
        lg: '6px',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.ink'),
            maxWidth: '72ch',
            a: {
              color: theme('colors.clay'),
              textUnderlineOffset: '3px',
              textDecorationThickness: '1px',
              '&:hover': { textDecorationThickness: '2px' },
              code: { color: theme('colors.clay') },
            },
            'h1,h2,h3,h4': {
              fontFamily: 'var(--font-gowun-batang), Georgia, serif',
              letterSpacing: theme('letterSpacing.tight'),
            },
            'h1,h2': { fontWeight: '700' },
            h3: { fontWeight: '700' },
            code: {
              color: theme('colors.primary.700'),
              backgroundColor: theme('colors.surface'),
              padding: '0.15em 0.35em',
              borderRadius: '3px',
              fontWeight: '500',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            blockquote: {
              borderLeftColor: theme('colors.clay'),
              borderLeftWidth: '2px',
              fontStyle: 'normal',
              color: theme('colors.muted'),
            },
            thead: { borderBottomColor: theme('colors.line') },
            'tbody tr': { borderBottomColor: theme('colors.line') },
            hr: { borderColor: theme('colors.line') },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': theme('colors.ink'),
            a: { color: theme('colors.clay'), code: { color: theme('colors.clay') } },
            'h1,h2,h3,h4,h5,h6': { color: theme('colors.ink') },
            code: { color: theme('colors.primary.200') },
            blockquote: { color: theme('colors.muted') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
