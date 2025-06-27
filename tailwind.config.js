/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#4284f5',
                secondary: '#FFCC00',
                tertiary: '#000000',
                neutral: {
                black: '#202020',
                white: '#FAFAFA',
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
            },
            animation: {
                fadeIn: 'fadeIn 1s ease',
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