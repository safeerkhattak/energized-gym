// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gym-orange': '#FF6B35',
        'gym-dark': '#1a1a1a',
        'gym-gold': '#FFD700'
      },
      backgroundImage: {
        'gym-floor': "url('/img/gym-floor.jpg')",
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out',
        'fade-in-up-delayed': 'fadeInUp 1s ease-out 0.3s both',
        'fade-in-up-delayed-2': 'fadeInUp 1s ease-out 0.6s both',
        'fade-in-left': 'fadeInLeft 1s ease-out 0.3s both',
        'fade-in-right': 'fadeInRight 1s ease-out 0.6s both',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out infinite 1s',
        'float-delayed-2': 'float 3s ease-in-out infinite 2s',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(255, 107, 53, 0.5)'
          },
          '50%': {
            boxShadow: '0 0 40px rgba(255, 107, 53, 0.8)'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        }
      }
    },
  },
  plugins: [],
}

export default config