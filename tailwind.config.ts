import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-kanit)', 'sans-serif'],
            },
            colors: {
                brand: {
                    DEFAULT: '#FF5F00',
                    500: '#FF5F00',
                    600: '#CC4C00',
                    950: '#1A0500', // Deep orange-black for backgrounds if needed
                },
                macro: {
                    orange: '#FF5F00',
                    cream: '#DED5B6',
                    charcoal: '#111111',
                    gray: '#222222',
                    'gray-light': '#888888',
                    sand: '#F2F0E9',
                    paper: '#F7F5F0',
                    'paper-border': '#D6D3CD',
                    ink: '#1A1A1A',
                    graphite: '#4A4A4A',
                },
                slate: {
                    800: '#222222',
                    900: '#161616',
                    950: '#111111',
                }
            },
            backgroundImage: {
                'noise': "url('/noise.png')", // We might need to add a noise asset or CSS generic
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
