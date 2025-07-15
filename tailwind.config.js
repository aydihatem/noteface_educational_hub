/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* minimal borders */
        input: "var(--color-input)", /* input backgrounds */
        ring: "var(--color-ring)", /* focus rings */
        background: "var(--color-background)", /* clean reading canvas */
        foreground: "var(--color-foreground)", /* rich reading color */
        primary: {
          DEFAULT: "var(--color-primary)", /* deep wisdom blue */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* warm discovery yellow */
          foreground: "var(--color-secondary-foreground)", /* rich reading color */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* caring red */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* gentle elevation */
          foreground: "var(--color-muted-foreground)", /* clear hierarchy */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* earth orange */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* popover backgrounds */
          foreground: "var(--color-popover-foreground)", /* rich reading color */
        },
        card: {
          DEFAULT: "var(--color-card)", /* gentle elevation */
          foreground: "var(--color-card-foreground)", /* rich reading color */
        },
        success: {
          DEFAULT: "var(--color-success)", /* growth green */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* gentle amber */
          foreground: "var(--color-warning-foreground)", /* white */
        },
        error: {
          DEFAULT: "var(--color-error)", /* caring red */
          foreground: "var(--color-error-foreground)", /* white */
        },
        'text-primary': "var(--color-text-primary)", /* rich reading color */
        'text-secondary': "var(--color-text-secondary)", /* clear hierarchy */
        'surface': "var(--color-surface)", /* gentle elevation */
        'surface-warm': "var(--color-surface-warm)", /* comfortable cream */
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'accent': ['Dancing Script', 'cursive'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'educational': '0 2px 8px rgba(46, 89, 132, 0.1)',
        'educational-strong': '0 4px 16px rgba(46, 89, 132, 0.15)',
        'warm': '0 4px 20px rgba(46, 89, 132, 0.15)',
      },
      animation: {
        'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        'pulse-gentle': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'educational': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      aspectRatio: {
        'golden': '1.618',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(280px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(280px, 1fr))',
      },
      backdropBlur: {
        'educational': '10px',
        'soft': '5px',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}