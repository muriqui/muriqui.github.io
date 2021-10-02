const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './docs/_includes/*.html',
    './docs/_layouts/*.html',
    './docs/*.html',
  ],
  darkMode: 'media',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      lime: colors.lime,
      emerald: colors.emerald,
    },
    fontFamily: {
      headline: ['Merriweather', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      body: ['Lora', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
    },
    extend: {
      colors: {
        gray: {
          400: '#A3A3AB',
        },
      },
      screens: {
        'xl': '1154px',
        'print': {'raw': 'print'},
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '[class~="lead"]': {
              color: theme('colors.gray.500'),
              marginTop: '0',
              marginBottom: '0',
            },
            a: {
              color: theme('colors.lime.700'),
              boxShadow: `inset 0 -1px 0 0 ${theme('colors.emerald.200')}`,
              borderBottom: `1px solid ${theme('colors.emerald.200')}`,
              textDecoration: 'none',
              transition: 'all .15s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                boxShadow: `inset 0 -1.25em 0 0 ${theme('colors.emerald.200')}`,
                color: theme('colors.lime.900'),
              },
            },
            em: {
              color: theme('colors.gray.900'),
            },
            h1: {
              backgroundClip: 'text',
              backgroundImage: `linear-gradient(to bottom right, ${theme('colors.emerald.700')}, ${theme('colors.lime.600')})`,
              color: theme('colors.transparent'),
              display: 'inline-block',
              fontFamily: theme('fontFamily.headline').join(),
              fontSize: '2.25rem',
              fontWeight: '900',
              lineHeight: '1.375',
              marginBottom: '1rem',
            },
            h2: {
              fontWeight: '600',
            },
            h3: {
              fontWeight: '500',
            },
            h4: {
              fontWeight: '600',
            },
            h5: {
              fontWeight: '500',
            },
            'a code': {
              color: theme('colors.lime.700'),
            },
            img: {
              width: '100%',
              borderRadius: '0.25rem',
            },
            '[class~="hero"]': {
              margin: '0 -5vw 2rem',
            },
            '[class~="hero"] > img': {
              borderRadius: '0',
            },
          },
        },
        sm: {
          css: {
            '[class~="lead"]': {
              marginTop: '0',
              marginBottom: '0',
            },
            '[class~="hero"]': {
              margin: '0 -10vw 2rem',
            },
          },
        },
        lg: {
          css: {
            '[class~="lead"]': {
              marginTop: '0',
              marginBottom: '0',
            },
            h1: {
              fontSize: '3.75rem',
              lineHeight: '1.375',
              marginBottom: '1rem',
            },
            '[class~="hero"]': {
              margin: '0 -10vw 2rem',
            },
          },
        },
        xl: {
          css: {
            '[class~="lead"]': {
              marginTop: '0',
              marginBottom: '0',
            },
            h1: {
              fontSize: '3.75rem',
              lineHeight: '1.375',
              marginBottom: '1rem',
            },
            '[class~="hero"]': {
              margin: '0 -15vw 2rem',
            },
          },
        },
        wide: {
          css: {
            img: {
              maxWidth: '1038px',
              width: '90vw',
              position: 'relative',
              left: '50%',
              transform: 'translateX(-50%)',
            },
            '[class~="hero"] > img': {
              maxWidth: 'none',
              width: '100vw',
            },
          },
        },
        max: {
          css: {
            '[class~="hero"] > img': {
              maxWidth: '1038px',
              borderRadius: '0.25rem',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.400'),
            '[class~="lead"]': {
              color: theme('colors.gray.400'),
            },
            a: {
              color: theme('colors.lime.500'),
              boxShadow: `inset 0 -1px 0 0 ${theme('colors.emerald.800')}`,
              borderBottomColor: theme('colors.emerald.800'),
              '&:hover': {
                boxShadow: `inset 0 -1.25em 0 0 ${theme('colors.emerald.800')}`,
                color: theme('colors.lime.400'),
              },
            },
            em: {
              color: theme('colors.gray.50'),
            },
            strong: {
              color: theme('colors.gray.50'),
            },
            'ol > li::before': {
              color: theme('colors.gray.400'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.600'),
            },
            blockquote: {
              color: theme('colors.gray.50'),
              borderLeftColor: theme('colors.gray.600'),
            },
            h1: {
              backgroundImage: `linear-gradient(to bottom right, ${theme('colors.lime.300')}, ${theme('colors.emerald.500')})`,
            },
            h2: {
              color: theme('colors.gray.50'),
            },
            h3: {
              color: theme('colors.gray.50'),
            },
            h4: {
              color: theme('colors.gray.50'),
            },
            'figure figcaption': {
              color: theme('colors.gray.400'),
            },
            code: {
              color: theme('colors.gray.50'),
            },
            'a code': {
              color: theme('colors.lime.500'),
            },
            img: {
              opacity: '.9',
            },
            thead: {
              color: theme('colors.gray.50'),
            },
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
