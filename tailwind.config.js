/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      /* ==================== Colors ==================== */
      colors: {
        // Background colors
        background: {
          primary: "var(--bg-primary)",
          card: "var(--bg-card)",
          overlay: "var(--bg-overlay)",
        },
        // Text colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          accent: "var(--text-accent)",
        },
        // Border colors
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          light: "var(--border-light)",
        },
        // Component-specific colors
        header: {
          background: "var(--header-bg)",
          text: "var(--header-text-color)",
        },
        nav: {
          link: "var(--nav-link-color)",
          hover: "var(--nav-link-color-hover)",
        },
        card: {
          background: "var(--card-bg)",
          border: "var(--card-border)",
        },
        link: {
          DEFAULT: "var(--link-color)",
          hover: "var(--link-color-hover)",
        },
      },

      /* ==================== Typography ==================== */
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'md': 'var(--font-size-md)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)',
        '7xl': 'var(--font-size-7xl)',
        'hero': 'var(--font-size-hero)',
        'hero-lg': 'var(--font-size-hero-lg)',
      },
      fontWeight: {
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)',
      },
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'base': 'var(--line-height-base)',
        'md': 'var(--line-height-md)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)',
        '5xl': 'var(--line-height-5xl)',
        '6xl': 'var(--line-height-6xl)',
        '7xl': 'var(--line-height-7xl)',
        '8xl': 'var(--line-height-8xl)',
        'hero': 'var(--line-height-hero)',
        'hero-lg': 'var(--line-height-hero-lg)',
      },
      letterSpacing: {
        'tight': 'var(--letter-spacing-tight)',
        'normal': 'var(--letter-spacing-normal)',
        'wide': 'var(--letter-spacing-wide)',
        'wider': 'var(--letter-spacing-wider)',
        'widest': 'var(--letter-spacing-widest)',
      },
      fontFamily: {
        'primary': 'var(--font-primary)',
        'secondary': 'var(--font-secondary)',
        'jetbrains': ['JetBrains Mono', 'monospace'],
        'cormorant': ['Cormorant Garamond', 'serif'],
      },

      /* ==================== Spacing ==================== */
      spacing: {
        'xs': 'var(--margin-xs)',
        'sm': 'var(--margin-sm)',
        'md': 'var(--margin-md)',
        'lg': 'var(--margin-lg)',
        'xl': 'var(--margin-xl)',
        '2xl': 'var(--margin-2xl)',
        '3xl': 'var(--margin-3xl)',
        '4xl': 'var(--margin-4xl)',
        '5xl': 'var(--margin-5xl)',
        '6xl': 'var(--margin-6xl)',
        '7xl': 'var(--margin-7xl)',
        '8xl': 'var(--margin-8xl)',
        '9xl': 'var(--margin-9xl)',
        '10xl': 'var(--margin-10xl)',
        '11xl': 'var(--margin-11xl)',
        '12xl': 'var(--margin-12xl)',
        '13xl': 'var(--margin-13xl)',
        '14xl': 'var(--margin-14xl)',
        '15xl': 'var(--margin-15xl)',
        '16xl': 'var(--margin-16xl)',
      },
      padding: {
        'sm': 'var(--padding-sm)',
        'md': 'var(--padding-md)',
        'lg': 'var(--padding-lg)',
        'xl': 'var(--padding-xl)',
        '2xl': 'var(--padding-2xl)',
        '3xl': 'var(--padding-3xl)',
        '4xl': 'var(--padding-4xl)',
        '5xl': 'var(--padding-5xl)',
        '6xl': 'var(--padding-6xl)',
        '7xl': 'var(--padding-7xl)',
        '8xl': 'var(--padding-8xl)',
        '9xl': 'var(--padding-9xl)',
      },
      gap: {
        'xs': 'var(--gap-xs)',
        'sm': 'var(--gap-sm)',
        'md': 'var(--gap-md)',
        'lg': 'var(--gap-lg)',
        'xl': 'var(--gap-xl)',
        '2xl': 'var(--gap-2xl)',
        '3xl': 'var(--gap-3xl)',
        '4xl': 'var(--gap-4xl)',
        '5xl': 'var(--gap-5xl)',
        '6xl': 'var(--gap-6xl)',
        '7xl': 'var(--gap-7xl)',
        '8xl': 'var(--gap-8xl)',
        '9xl': 'var(--gap-9xl)',
        '10xl': 'var(--gap-10xl)',
        '11xl': 'var(--gap-11xl)',
        '12xl': 'var(--gap-12xl)',
      },

      /* ==================== Borders ==================== */
      borderRadius: {
        'none': 'var(--radius-none)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
      },
      borderWidth: {
        'thin': 'var(--border-width-thin)',
        'medium': 'var(--border-width-medium)',
        'thick': 'var(--border-width-thick)',
      },

      /* ==================== Layout ==================== */
      maxWidth: {
        'container': 'var(--width-container)',
      },
      width: {
        'container': 'var(--width-container)',
      },
    },
  },
  plugins: [],
};