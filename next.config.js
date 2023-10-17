const path = require("path");

module.exports = {
    i18n: {
        locales: ["fr", "en"],
        defaultLocale: "fr",
    },
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "css")],
    },
    trailingSlash: true,
    devIndicators: {
        buildActivity: false,
    },
    eslint: {
        ignoreDuringBuilds: false,
    },
};