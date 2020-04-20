module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('babel-preset-react-app')], // 必要なパッケージがまとめて入る
    },
  })

  // storybook で scss を load する
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true, // css modules での読み込みを許可する
        },
      },
      'sass-loader',
    ],
  })

  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
