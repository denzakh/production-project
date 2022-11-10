import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { <FTName> } from './<FTName>';

export default {
    title: 'shared/<FTName>',
    component: <FTName>,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
    },
} as ComponentMeta<typeof <FTName>>;

const Template: ComponentStory<typeof <FTName>> = (args) => <<FTName> {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    theme: <FTName>.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
    theme: <FTName>.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];