const path = require('path');
const eslintFriendlyFormatter = require('eslint-friendly-formatter');

module.exports = {
    mode: 'production',
    entry: {
        {{library}}: ['./src/main.ts']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js',
        libraryTarget: '{{libraryTarget}}',
        library: '[name]',
        {{#if_or libraryTarget "umd"}}
        globalObject: 'this',
        umdNamedDefine: true,
        {{/if_or}}
        libraryExport: 'default'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@': path.resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [path.resolve(__dirname, './src')],
                options: {
                    formatter: eslintFriendlyFormatter,
                    fix: false,
                    extensions: ['.ts'],
                    cache: false,
                    emitWarning: true,
                    emitError: false
                }
            }, {
                test: /\.ts$/,
                use: ['ts-loader'],
                exclude: [path.resolve(__dirname, 'node_modules')]
            }
        ]
    }
};
