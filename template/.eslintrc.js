module.exports = {
    env: {
        browser: true,
        es2020: true
    },
    extends: [
        'airbnb-base'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        indent: 0,
        'comma-dangle': ['error', 'never'],
        'import/no-unresolved': [2, { ignore: ['^@/'] }],
        'no-undef': 0,
        'no-unused-vars': 0
    }
};
