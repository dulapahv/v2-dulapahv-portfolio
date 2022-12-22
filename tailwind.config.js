/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                manrope: ["Manrope", "sans-serif"],
            },
            animation: {
                vibrate: "vibrate 0.3s linear infinite both",
            },
            keyframes: {
                vibrate: {
                    "0%": {
                        transform: "translate(0)",
                    },
                    "20%": {
                        transform: "translate(-2px, 2px)",
                    },
                    "40%": {
                        transform: "translate(-2px, -2px)",
                    },
                    "60%": {
                        transform: "translate(2px, 2px)",
                    },
                    "80%": {
                        transform: "translate(2px, -2px)",
                    },
                    "100%": {
                        transform: "translate(0, 0)",
                    },
                },
            },
        },
    },
    plugins: [],
};
