import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
    },

    colors: {
      white: '#FFFFFF',
      paleGray: '#F5F5F5',
      borderGray: '#CED4DA',
      dashGray:'#BEC5CB',
      lightGray: '#6C757D',
      mediumGray: '#3D464D',
      alphaGray: '#3D464D80',
      darkGray: '#212529',
      yellow: '#FFD333',
      },

    safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[slide-in-up_1s_ease-in-out]'],
      
      extend: {
        
        backgroundImage: {
        'check-icon': "url('/check-icon.png')",
      },
        spacing: {
          '112': '448px',
          '108': '432px',
          '75': '300px',
          '37': '150px',
          '18': '72px',
        },
        animation: {
          'fly-down': 'fly-down 1s ease-in-out',
          'bounce-in': 'bounce-in 1s ease-in-out',
          'fly-up': 'fly-up 1s ease-in-out',
          'fly-up-1': 'fly-up-1 0.6s ease-in-out',
          'fly-up-2': 'fly-up-2 0.6s ease-in-out',
          'fly-up-3': 'fly-up-3 0.6s ease-in-out',
          'fly-up-4': 'fly-up-4 0.6s ease-in-out',
        },
        keyframes: {
        'fly-down': {
          '0%': {opacity:'0', transform: 'translate3d(0,-100%,0)'},
          '100%': {opacity:'1', transform: 'translateZ(0)'},
        },
        'bounce-in': {
          '0%': {opacity:'0', transform: 'scale3d(.3,.3,.3)'},
          '20%': {transform: 'scale3d(1.1,1.1,1.1)'},
          '40%': {transform: 'scale3d(.9,.9,.9)'},
          '60%': {opacity:'1', transform: 'scale3d(1.03,1.03,1.03)'},
          '80%': {transform: 'scale3d(.97,.97,.97)'},
          '100%': {opacity:'1',transform: 'scaleX(1)'},
        },
        'fly-up': {
          '0%': {opacity:'0', transform: 'translate3d(0,+100%,0)'},
          '100%': {opacity:'1', transform: 'translateZ(0)'},
        },
        'fly-up-1': {
          '0%': {opacity:'0', transform: 'translate3d(0,+100%,0)'},
          '100%': {opacity:'1', transform: 'translateZ(0)'},
        },
        'fly-up-2': {
          '0%': {opacity:'0', transform: 'translate3d(0,+150%,0)'},
          '100%': {opacity:'1', transform: 'translateZ(0)'},
        },
        'fly-up-3': {
          '0%': {opacity:'0', transform: 'translate3d(0,+200%,0)'},
          '100%': {opacity:'1', transform: 'translateZ(0)'},
        },
        'fly-up-4': {
          '0%': {opacity:'0', transform: 'translate3d(0,+250%,0)'},
          '100%': {opacity:'1', transform: 'translateZ(0)'},
        },
      },
    },
  },
  plugins: [],
}
export default config
