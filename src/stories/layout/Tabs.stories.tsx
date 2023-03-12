import { StoryFn, Meta } from '@storybook/react';
import { LoremIpsumLong, LoremIpsumMedium, LoremIpsumShort } from '../lorem-ipsum';
import { Tabs } from '../../components/layout/Tabs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layout/Tabs',
  component: Tabs,
} as Meta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Tabs> = (args) => <Tabs {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  tabs: [
    {
      name: 'First',
      content: LoremIpsumLong(),
    },
    {
      name: 'Second',
      content: LoremIpsumMedium(),
    },
    {
      name: 'Third',
      content: LoremIpsumShort(),
    },
  ],
};
