import { Meta, StoryFn } from '@storybook/react';
import { Avatar } from '../../components/ui/Avatar';
import avatar from '../../assets/img/Avatar.jpg';

export default {
  title: 'ui/Avatar',
  component: Avatar,
} as Meta<typeof Template>;
const Template: StoryFn<typeof Avatar> = (args) => <Avatar {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  src: avatar,
};
