module.exports = {
    presets: [
        ['@babel/preset-env', {
            useBuiltIns: 'usage',
            modules: false
        }],
    ],
    plugins: [
        [
            'module-resolver',
            { 'root': ['./src'] },
        ],
        [
            '@babel/plugin-proposal-class-properties',
        ],
    ],
}
