const js = require("@eslint/js");

const config = [
    js.configs.recommended,
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
module.exports = config;
