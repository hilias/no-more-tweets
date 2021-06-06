var path = require('path');

module.exports = {
    entry: {
        background_scripts: "./src/background_script.js",
    },
    output: {
        path: path.join(__dirname, "addon/"),
        filename: "index.js"
    },
    optimization: {
        minimize: false
    }
};