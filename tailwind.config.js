/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                pieceBg: "#111221",
                pieceGray: "#737486",
                secondary: "#292A3F",
                border: "#32344D",
                pieceBlue: "#1D4ED8"
            }
        }
    },
    plugins: []
};
