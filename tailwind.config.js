/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontSize: {
            "xs": "0.563rem",
            "sm": "0.75rem",
            "base": "1rem",
            "lg": "1.333rem",
            "xl": "1.777rem",
            "2xl": "2.369rem",
            "3xl": "3.157rem",
            "4xl": "4.209rem",
        },
        extend: {
            borderRadius: {
                "none": "0",
                "sm": "2px",
                DEFAULT: "4px",
                "md": "6px",
                "lg": "8px",
                "xl": "12px",
                "2xl": "16px",
                "3xl": "24px",
                "full": "50%",
            },
        },
    },
    plugins: [],
}

