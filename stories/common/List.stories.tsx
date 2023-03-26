import { Meta, StoryFn } from '@storybook/react';

import { List } from '../../components/common/List';
import { ListProps } from '../../components/interface';
import { Appearance, Hover, Space } from '../../components/types';

export default {
  title: 'common/List',
  component: List,
} as Meta<typeof Template>;
const Template: StoryFn<typeof List> = (args) => <List {...args} />;

const pediatricians = [
  'Home',
  'Posts',
  'About',
  'More',
  'Contact',
  'FAQ',
  'Details',
  'Shop',
  'Review',
];

const listItems: ListProps = {
  items: pediatricians.map((item) => {
    return {
      appearance: Appearance.GrayFill,
      padding: 'px-2 py-1',
      space: Space.BaseBottom,
      hoverEffect: Hover.Brightness,
      children: item,
    };
  }),
};
export const Sample = Template.bind({});
Sample.args = {
  items: listItems.items,
  limit: 2,
};
