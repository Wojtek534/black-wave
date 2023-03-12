import { Meta, StoryFn } from '@storybook/react';
import { NavigationScreen } from './NavigationScreen';

export default {
  title: 'example/NavigationScreen',
  component: NavigationScreen,
} as Meta<typeof Template>;
const Template: StoryFn<typeof NavigationScreen> = (args) => <NavigationScreen {...args} />;

export const Sample = Template.bind({});
