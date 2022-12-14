/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#D2DCF7",
                    200: "#A5B8EF",
                    300: "#7795E8",
                    400: "#4A71E0",
                    500: "#1D4ED8",
                    600: "#173EAD",
                    700: "#112F82",
                    800: "#0C1F56",
                    900: "#06102B"
                },
                danger: {
                    100: "#FFCCCC",
                    200: "#FF9999",
                    300: "#FF6666",
                    400: "#FF3333",
                    500: "#FF0000",
                    600: "#CC0000",
                    700: "#990000",
                    800: "#660000",
                    900: "#330000"
                },
                info: {
                    100: "#FFF3CD",
                    200: "#FFE69C",
                    300: "#FFDA6A",
                    400: "#FFCD39",
                    500: "#FFC107",
                    600: "#CC9A06",
                    700: "#997404",
                    800: "#664D03",
                    900: "#332701"
                },
                success: {
                    100: "#CCF8D5",
                    200: "#99F1AB",
                    300: "#66E980",
                    400: "#33E256",
                    500: "#00DB2C",
                    600: "#00AF23",
                    700: "#00831A",
                    800: "#005812",
                    900: "#002C09"
                },
                pieceBg: "#111221",
                pieceTitle: "#E8E6E3",
                pieceCard: "#1D1E2B",
                pieceGray: "#737486",
                secondary: "#1D1E2B",
                pieceHover: "#32344D",
                border: "#32344D",
                pieceBgLight: "#EFEFEF",
                pieceBorderLight: "#DCDCDC",
                pieceBlue: "#1D4ED8"
            }
        }
    },
    plugins: []
};
