/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                roboto: "var(--font-roboto)",
                minecraft: "var(--font-minecraft)",
                block: "var(--font-block)",
            },
            colors: {
                primary: '#4284f5',
                secondary: '#FFCC00',
                tertiary: '#1d1027',
                neutral: {
                black: '#202020',
                white: '#FAFAFA',
                loaderPrimary: '#F50F0E',
                loaderSecondary: '#3192D1',
                },
                feedback: {
                    error: {
                        'dark-01': '#C9201D',
                        'dark-02': '#FF6F71',
                        'dark-03': '#FFE3E7',
                    },
                    success: {
                        'dark-01': '#29D36B',
                    },
                },
            },
            fontSize: {
                title: '40px',
                description: '20px'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                textReveal: {
                    from: {
                        opacity: '0.5',
                        transform: 'translateX(100px)',
                    },
                    '50%': {
                        opacity: '1',
                        transform: 'translateX(-20px)',
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateX(0) rotate(0deg)',
                    },
                },
            },
            animation: {
                fadeIn: 'fadeIn 1s ease',
                textReveal: 'textReveal 1s ease 1 forwards'
            },
            borderRadius: {
                md: '0.5rem',
                lg: '1.5rem',
            },
            gap: {
                lg: '1.5rem',
                s: '0.5rem',
            },
            padding: {
                lg: '1.5rem',
            },
            width: {
                limit: '1500px',
            },
        },
    },
    safelist: [
        { pattern: /^w-/ },
        { pattern: /^h-/ },
        { pattern: /^max-w-/ },
        { pattern: /^max-h-/ },
        { pattern: /^bg-/ },
        { pattern: /^text-/ },
    ],
}