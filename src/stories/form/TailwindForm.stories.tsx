import { Meta, StoryFn } from '@storybook/react';
import TailwindForm from './TailwindForm';

export default {
  title: 'form/TailwindForm',
  component: TailwindForm,
} as Meta<typeof TailwindForm>;
const Template: StoryFn<typeof TailwindForm> = (args) => <TailwindForm {...args} />;

export const Sample = Template.bind({});
