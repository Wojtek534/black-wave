import { Meta, StoryFn } from '@storybook/react';
import { Checkbox } from '../../components/form/Checkbox';

export default {
  title: 'form/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;
const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Checked = Template.bind({});

Checked.args = {
  value: true,
  onChange: (value) => {
    console.log(value);
  },
  radius: 'rounded',
};

export const Unchecked = Template.bind({});

Unchecked.args = {
  value: false,
  onChange: (value) => {
    console.log(value);
  },
  radius: 'rounded',
};
