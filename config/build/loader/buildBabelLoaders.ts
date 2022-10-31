import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildBabelLoaders(isDev: boolean) {
    return {
        test: /\.(js|jsx|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ['i18next-extract', {
                        locales: ['en', 'ru'],
                        keyAsDefaultValue: true,
                    }],
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            },
        },
    };
}
