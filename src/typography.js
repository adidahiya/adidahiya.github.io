import Typography from "typography";
import fairyGatesTheme from "typography-theme-fairy-gates";

const typography = new Typography({
    ...fairyGatesTheme,
    googleFonts: [
        {
            name: "Work Sans",
            styles: ["400", "600"],
        },
        {
            name: "Fira Mono",
            styles: ["400", "400i", "700", "700i"],
        },
    ],
    baseFontSize: "14px",
    baseLineHeight: 1.5,
    bodyFontFamily: ["Fira Mono", "sans-serif"],
    headerFontFamily: ["Work Sans", "sans-serif"],
});
const { rhythm, scale } = typography;

export { rhythm, scale, typography as default };
