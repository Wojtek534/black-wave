import { Meta, StoryFn } from '@storybook/react';
import { Image } from '../../components/common/Image';
import payment_01 from '../../assets/img/payment_01.jpg';
export default {
  title: 'common/Image',
  component: Image,
} as Meta<typeof Image>;
const Template: StoryFn<typeof Image> = (args) => <Image {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  src: payment_01,
};
