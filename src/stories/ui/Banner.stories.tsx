import { StoryFn, Meta } from '@storybook/react';
import { Banner } from '../../components/ui/Banner';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ui/Banner',
  component: Banner,
} as Meta<typeof Banner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Banner> = (args) => <Banner {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  children: (
    <div className="flex">
      <h4 className="mr-4 font-bold">GeneriCon</h4>
      <p>2023 Join us in Denver from June 7 – 9 to see what’s coming next.</p>
    </div>
  ),
};
