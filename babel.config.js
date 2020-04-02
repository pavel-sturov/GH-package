module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage',
            },
        ],
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
