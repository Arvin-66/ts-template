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
