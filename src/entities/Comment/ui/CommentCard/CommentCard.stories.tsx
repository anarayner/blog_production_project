import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
    title: 'widgets/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Light = Template.bind({});
Light.args = {
    comment: {
        id: '1',
        user: {
            id: '1', username: 'Admin', avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        },
        text: 'comment',
    },
};
