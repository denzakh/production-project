import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <AvatarDropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'Randomusers',
                avatar: 'http://xsgames.co/randomusers/avatar.php?g=male',
                roles: [UserRole.ADMIN, UserRole.MANAGER],
            },
        },
    }),
];
