// craco.config.js
const path = require('path');

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            // Ensure to remove previous rules for .txt files
            webpackConfig.module.rules = webpackConfig.module.rules.filter(
                (rule) => !(rule.test && rule.test.toString().includes('.txt'))
            );

            // Add raw-loader for .txt files
            webpackConfig.module.rules.push({
                test: /\.txt$/,
                use: 'raw-loader',
                include: path.resolve(__dirname, 'src'), // Adjust if needed
            });

            return webpackConfig;
        },
    },
};