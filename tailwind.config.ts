import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					light: 'hsl(var(--primary-light))',
					dark: 'hsl(var(--primary-dark))',
					ultra: 'hsl(var(--primary-ultra))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					premium: 'hsl(var(--accent-premium))',
					blue: 'hsl(var(--accent-blue))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				premium: {
					dark: 'hsl(var(--premium-dark))',
					'dark-foreground': 'hsl(var(--premium-dark-foreground))',
					slate: 'hsl(var(--premium-slate))',
					'slate-light': 'hsl(var(--premium-slate-light))'
				}
			},
			fontFamily: {
				'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
				'display': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
				'heading': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
				'serif': ['Playfair Display', 'Georgia', 'serif'],
			},
			backgroundImage: {
				'gradient-premium': 'var(--gradient-premium)',
				'gradient-premium-light': 'var(--gradient-premium-light)',
				'gradient-premium-subtle': 'var(--gradient-premium-subtle)',
				'gradient-accent-soft': 'var(--gradient-accent-soft)',
				'gradient-glow': 'var(--gradient-glow)',
				'gradient-mesh': 'var(--gradient-mesh)',
			},
			boxShadow: {
				'xs': 'var(--shadow-xs)',
				'sm': 'var(--shadow-sm)',
				'md': 'var(--shadow-md)',
				'lg': 'var(--shadow-lg)',
				'xl': 'var(--shadow-xl)',
				'premium': 'var(--shadow-premium)',
				'glow': 'var(--shadow-glow)',
				'inner': 'var(--shadow-inner)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'float-card': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'25%': { transform: 'translateY(-8px) rotate(0.5deg)' },
					'50%': { transform: 'translateY(-15px) rotate(0deg)' },
					'75%': { transform: 'translateY(-8px) rotate(-0.5deg)' }
				},
				'truck': {
					'0%, 100%': { transform: 'translateX(0px)' },
					'50%': { transform: 'translateX(5px)' }
				},
				'scroll-rtl': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-33.333%)' }
				},
				'pulse-border': {
					'0%, 100%': { 
						borderColor: 'hsl(var(--border))',
						boxShadow: '0 0 0 0 transparent'
					},
					'50%': { 
						borderColor: 'hsl(var(--primary) / 0.6)',
						boxShadow: '0 0 0 2px hsl(var(--primary) / 0.1)'
					}
				},
				'highlight-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 0 0 transparent'
					},
					'50%': { 
						boxShadow: '0 0 8px 2px hsl(var(--primary) / 0.3)'
					}
				},
				'slideUp': {
					'0%': { transform: 'translateY(0)' },
					'16.66%': { transform: 'translateY(-24px)' },
					'33.33%': { transform: 'translateY(-48px)' },
					'50%': { transform: 'translateY(-72px)' },
					'66.66%': { transform: 'translateY(-96px)' },
					'83.33%': { transform: 'translateY(-120px)' },
					'100%': { transform: 'translateY(-144px)' }
				},
				'slideUpDesktop': {
					'0%': { transform: 'translateY(0)' },
					'16.66%': { transform: 'translateY(-48px)' },
					'33.33%': { transform: 'translateY(-96px)' },
					'50%': { transform: 'translateY(-144px)' },
					'66.66%': { transform: 'translateY(-192px)' },
					'83.33%': { transform: 'translateY(-240px)' },
					'100%': { transform: 'translateY(-288px)' }
				},
				'slideUpMobile': {
					'0%': { transform: 'translateY(0)' },
					'16.66%': { transform: 'translateY(-32px)' },
					'33.33%': { transform: 'translateY(-64px)' },
					'50%': { transform: 'translateY(-96px)' },
					'66.66%': { transform: 'translateY(-128px)' },
					'83.33%': { transform: 'translateY(-160px)' },
					'100%': { transform: 'translateY(-192px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'float-card': 'float-card 4s ease-in-out infinite',
				'float-card-delayed': 'float-card 4s ease-in-out infinite 1s',
				'float-card-delayed-2': 'float-card 4s ease-in-out infinite 2s',
				'truck': 'truck 2s ease-in-out infinite',
				'scroll-rtl': 'scroll-rtl 12s linear infinite',
				'scroll-rtl-mobile': 'scroll-rtl 6s linear infinite',
				'scroll-rtl-paused': 'scroll-rtl 12s linear infinite paused',
				'scroll-rtl-mobile-paused': 'scroll-rtl 6s linear infinite paused',
				'pulse-border': 'pulse-border 2s ease-in-out infinite',
				'highlight-glow': 'highlight-glow 3s ease-in-out infinite',
				'slideUp': 'slideUp 12s ease-in-out infinite',
				'slideUpDesktop': 'slideUpDesktop 12s ease-in-out infinite',
				'slideUpMobile': 'slideUpMobile 12s ease-in-out infinite'
			},
			screens: {
				'xs': '475px',
				'3xl': '1600px',
				'4xl': '1920px'
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem'
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/line-clamp")]
} satisfies Config
