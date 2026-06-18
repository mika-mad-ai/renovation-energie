/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // `font-sans` (défaut) → Inter ; `font-display` → Poppins (titres)
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Alias de marque (s'appuie sur la palette emerald/teal déjà utilisée)
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        // Ombres douces et modernes (faible opacité, diffusion large)
        'soft': '0 2px 8px -2px rgba(16, 24, 40, 0.08), 0 4px 16px -4px rgba(16, 24, 40, 0.06)',
        'card': '0 4px 24px -6px rgba(16, 24, 40, 0.10), 0 8px 40px -12px rgba(16, 24, 40, 0.08)',
        'glow': '0 8px 30px -6px rgba(16, 185, 129, 0.35)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #34d399 0%, #14b8a6 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
