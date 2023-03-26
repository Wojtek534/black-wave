import { StoryFn, Meta } from '@storybook/react';
import { Icon } from '../../components/common/Icon';
import { IconList } from '../../components/types/icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/Icon',
  component: Icon,
} as Meta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const Bookmark = Template.bind({});
Bookmark.args = {
  icon: IconList.BOOKMARK,
};
