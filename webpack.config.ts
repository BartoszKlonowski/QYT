const path = require("path");

module.exports = {
    entry: {
        "src/popup/Main": "./build/app/src/popup/Main.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build/app"),
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|svg)$/,
                type: "asset/resource"
            },
        ]
    },
};
