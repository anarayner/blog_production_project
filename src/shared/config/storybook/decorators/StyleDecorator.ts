// eslint-disable-next-line rayner-plugin/layer-imports
import '@/app/styles/index.scss';
import { Story } from '@storybook/react';

export const StyleDecorator = (story: ()=> Story) => story();
