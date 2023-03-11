import { Meta, StoryFn } from '@storybook/react';
import { InputPassword } from '../../components/form/InputPassword';

export default {
  title: 'form/InputPassword',
  component: InputPassword,
} as Meta<typeof InputPassword>;
const Template: StoryFn<typeof InputPassword> = (args) => <InputPassword {...args} />;

export const Sample = Template.bind({});

Sample.args = {
  value: 'Password',
  onChange: (value) => {
    console.log(value);
  },
};
