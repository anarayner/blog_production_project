import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPath } from '../build/types/config';
import { buildCssLoader } from '../build/loader/buildCssLoader';

export default ({ config } : {config: webpack.Configuration}) => {
    const paths: BuildPath = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
    };
    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');
    // eslint-disable-next-line no-param-reassign
    // @ts-ignore
    config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });
    config!.module!.rules.push({
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    });
    config!.module!.rules.push(buildCssLoader(true));
    config!.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('https://testapi.com'),
        __PROJECT__: JSON.stringify('storybook'),
    }));
    config!.resolve!.alias = {
        ...config!.resolve!.alias,
        '@': path.resolve(__dirname, '..', '..', 'src'),
    };
    return config;
};
