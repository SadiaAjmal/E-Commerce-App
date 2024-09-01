/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                'custom': '0.5fr 2fr 1fr 1fr 1fr 1fr',
            },
            backgroundImage: {
                'custom-gradient': 'linear-gradient(180deg, #fde1ff, #e1ffea22 60%)',
            },

            keyframes: {
                input: {
                    '0%': { backgroundPosition: '0% 0%' },
                    '50%': { backgroundPosition: '100% 100%' },
                    '100%': { backgroundPosition: '0% 0%' },
                },
            },
            animation: {
                input: 'input 4s infinite',
            },
        },
    },
    plugins: [],
}