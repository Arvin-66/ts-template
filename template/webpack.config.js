const path = require('path');
const eslintFriendlyFormatter = require('eslint-friendly-formatter');

module.exports = {
    mode: 'production', // development || production
    entry: {
        utils: ['./src/main.ts']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js',
        libraryTarget: 'umd', // 定义打包方式Universal Module Definition, 同时支持在CommonJS、AMD和全局变量使用
        library: '[name]', // 指定类库名,主要用于直接引用的方式(比如使用script 标签)
        globalObject: 'this',
        umdNamedDefine: true,
        libraryExport: 'default' // 对外暴露default属性，就可以直接调用default里的属性
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
