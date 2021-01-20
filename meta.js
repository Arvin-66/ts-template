const {
    install,
    message
} = require('./utils')

module.exports = {
    prompts: {
        name: {
            type: 'input',
            message: 'Project name'
        },
        description: {
            type: 'input',
            message: 'Project description',
            default: 'A Typescript project'
        },
        author: {
            type: 'input',
            message: 'Author',
            default: ''
        },
        library: {
            type: 'input',
            message: 'Define a global variable name used',
            default: 'utils'
        },
        libraryTarget: {
            type: 'list',
            message: 'Set the exposure mode of the library',
            choices: [
                {
                    name: 'umd',
                    value: 'umd',
                    short: 'umd'
                }, {
                    name: 'amd',
                    value: 'amd',
                    short: 'amd'
                }, {
                    name: 'window',
                    value: 'window',
                    short: 'window'
                }, {
                    name: 'global',
                    value: 'global',
                    short: 'global'
                }, {
                    name: 'this',
                    value: 'this',
                    short: 'this'
                }, {
                    name: 'commonjs',
                    value: 'commonjs',
                    short: 'commonjs'
                }, {
                    name: 'commonjs2',
                    value: 'commonjs2',
                    short: 'commonjs2'
                }
            ],
            default: 'umd'
        },
        autoInstall: {
            type: 'list',
            message: 'Should we run `npm install` for you after the project has been created?',
            choices: [
                {
                    name: 'Yes, use NPM',
                    value: true,
                    short: 'NPM'
                }, {
                    name: 'No, I will handle that myself',
                    value: false,
                    short: 'No'
                },
            ],
            default: true
        }
    },
    filters: {},
    complete: function (data, { notice }) {
        const { autoInstall } = data;
        if (autoInstall) {
            install(data, { notice });
        } else {
            message(data, { notice });
        }
    }
}
