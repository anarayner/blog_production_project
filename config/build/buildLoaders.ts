import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loader/buildCssLoaders';
import { buildBabelLoaders } from './loader/buildBabelLoaders';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
    const { isDev } = options;

    const codeBabelLoader = buildBabelLoaders({ ...options, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoaders({ ...options, isTsx: true });

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

    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

    const cssLoader = buildCssLoaders(isDev);

    return [
        svgLoader,
        fileLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        cssLoader,
    ];
}
