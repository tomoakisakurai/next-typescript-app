module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
            presets: [require.resolve('babel-preset-react-app')], // 必要なパッケージがまとめて入る
        },
    });

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};