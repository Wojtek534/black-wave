import { Meta, StoryFn } from '@storybook/react';
import { LoremIpsumLong } from '../lorem-ipsum';
import { Footer } from '../../components/layout';

export default {
  title: 'layout/Footer',
  component: Footer,
} as Meta<typeof Footer>;
const Template: StoryFn<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: LoremIpsumLong(),
};
