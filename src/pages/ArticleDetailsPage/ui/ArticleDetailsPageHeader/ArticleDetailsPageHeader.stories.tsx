import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

export default {
    title: 'shared/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => (
    <ArticleDetailsPageHeader {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
