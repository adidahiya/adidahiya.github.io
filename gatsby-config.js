module.exports = {
    siteMetadata: {
        title: "adidahiya.github.io",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-typescript",
        {
            resolve: "gatsby-plugin-typography",
            options: {
                pathToConfigModule: "src/typography.js",
            }
        },
    ],
};