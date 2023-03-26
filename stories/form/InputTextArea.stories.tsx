import { Meta, StoryFn } from '@storybook/react';
import { InputTextArea } from '../../components/form/InputTextArea';

export default {
  title: 'form/InputTextArea',
  component: InputTextArea,
} as Meta<typeof InputTextArea>;
const Template: StoryFn<typeof InputTextArea> = (args) => <InputTextArea {...args} />;

export const Sample = Template.bind({});

Sample.args = {
  value: 'Lorem Ipsum',
  onChange: (value) => {
    console.log(value);
  },
};
