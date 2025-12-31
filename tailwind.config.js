/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./*.{ts,tsx,js,jsx}", "./pages/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			display: ['Cormorant Garamond', 'Georgia', 'serif'],
  			heading: ['Crimson Pro', 'Georgia', 'serif'],
  			sans: ['Inter', 'system-ui', 'sans-serif'],
  			serif: ['Crimson Pro', 'Georgia', 'serif'],
  			accent: ['Inter', 'Helvetica Neue', 'sans-serif'],
  		},
  		fontSize: {
  			'display': 'clamp(3.5rem, 8vw, 7rem)',
  			'h1': 'clamp(3rem, 6vw, 5rem)',
  			'h2': 'clamp(2.25rem, 4.5vw, 3.5rem)',
  			'h3': 'clamp(1.75rem, 3vw, 2.5rem)',
  			'h4': 'clamp(1.375rem, 2.5vw, 2rem)',
  			'body-lg': 'clamp(1.125rem, 2vw, 1.375rem)',
  		},
  		spacing: {
  			'18': '4.5rem',
  			'22': '5.5rem',
  			'26': '6.5rem',
  			'30': '7.5rem',
  			'34': '8.5rem',
  			'38': '9.5rem',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			// Elite Design System Colors
  			elite: {
  				navy: '#1a2332',
  				charcoal: '#2d3142',
  				cream: '#fdfbf7',
  				beige: '#f5f1eb',
  				sage: '#d4dcd3',
  				rose: '#d4a5a5',
  				green: '#9db4a3',
  				gold: '#c9a96e',
  				lavender: '#c5c9e0',
  				taupe: '#9e8a78',
  				sand: '#e8dfd4',
  			},
  			// Legacy everett colors (keeping for compatibility)
  			everett: {
  				sage: '#D8E0D8',
  				white: '#FFFFFF',
  				text: '#1a2332',
  				accent: '#E8F0E8',
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}