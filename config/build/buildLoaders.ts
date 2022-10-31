import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loader/buildCssLoaders';
import { buildBabelLoaders } from './loader/buildBabelLoaders';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
    const babelLoader = buildBabelLoaders(isDev);

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = buildCssLoaders(isDev);

    return [
        svgLoader,
        babelLoader,
        fileLoader,
        typescriptLoader,
        cssLoader,
    ];
}
