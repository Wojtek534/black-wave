import { Meta, StoryFn } from '@storybook/react';
import { Formline } from '../../components/layout';
import { LoremIpsumLong } from '../lorem-ipsum';

export default {
  title: 'layout/Formline',
  component: Formline,
} as Meta<typeof Formline>;
const Template: StoryFn<typeof Formline> = (args) => <Formline {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  label: 'Label',
  labelWeight: 'font-semibold',
  isVertical: false,
  children: LoremIpsumLong(),
};
export const Vertical = Template.bind({});
Vertical.args = {
  label: 'Label',
  labelWeight: 'font-semibold',
  isVertical: true,
  children: LoremIpsumLong(),
};
