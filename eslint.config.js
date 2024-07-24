// eslint.config.js
/** @type {import("eslint").Linter.Config} */
module.exports = [
    {
        languageOptions: {
            sourceType: "commonjs",
        },
        rules: {
            semi: "error",
            "prefer-const": "error",
        },
    },
];
