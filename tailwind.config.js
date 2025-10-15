/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'xs': ['0.8125rem', { lineHeight: '1.25rem' }],      // 13px
        'sm': ['0.9375rem', { lineHeight: '1.5rem' }],       // 15px
        'base': ['1.0625rem', { lineHeight: '1.75rem' }],    // 17px (increased from 16px)
        'lg': ['1.1875rem', { lineHeight: '1.875rem' }],     // 19px (increased from 18px)
        'xl': ['1.3125rem', { lineHeight: '2rem' }],         // 21px (increased from 20px)
        '2xl': ['1.5625rem', { lineHeight: '2.25rem' }],     // 25px (increased from 24px)
        '3xl': ['1.9375rem', { lineHeight: '2.5rem' }],      // 31px (increased from 30px)
        '4xl': ['2.3125rem', { lineHeight: '2.75rem' }],     // 37px (increased from 36px)
        '5xl': ['3.0625rem', { lineHeight: '1' }],           // 49px (increased from 48px)
        '6xl': ['3.8125rem', { lineHeight: '1' }],           // 61px (increased from 60px)
        '7xl': ['4.8125rem', { lineHeight: '1' }],           // 77px (increased from 72px)
        '8xl': ['6.0625rem', { lineHeight: '1' }],           // 97px (increased from 96px)
        '9xl': ['8.0625rem', { lineHeight: '1' }],           // 129px (increased from 128px)
      },
      colors: {
        'primary-pink': '#ff69b4',
        'soft-pink': '#ffb3d9',
        'rose-gold': '#e8b4a4',
        'cream': '#fff8f0',
        'chocolate-brown': '#8b4513',
        'vanilla-cream': '#faf0e6',
        'golden-yellow': '#ffd700',
        'deep-pink': '#c2185b',
        'charcoal': '#2c2c2c',
        'light-gray': '#f5f5f5',
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'script': ['Dancing Script', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'slide-left': 'slide-left 0.5s ease-out',
        'slide-right': 'slide-right 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
        'scale-up': 'scale-up 0.3s ease-out',
        'rotate-360': 'rotate-360 1s linear infinite',
        'wave': 'wave 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'scale-up': {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        'rotate-360': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'wave': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(15deg)' },
          '75%': { transform: 'rotate(-15deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};