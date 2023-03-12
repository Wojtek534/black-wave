import { Meta, StoryFn } from '@storybook/react';
import { Dropdown } from '../../components/common/Dropdown';

import { SiteHeader } from '../../components/layout/SiteHeader';
import { Navigate } from '../../components/common';
import { Appearance, Hover } from '../../components/types';

export default {
  title: 'layout/SiteHeader',
  component: SiteHeader,
} as Meta<typeof SiteHeader>;
const Template: StoryFn<typeof SiteHeader> = (args) => <SiteHeader {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  name: 'Sample title',
  height: 'h-12',
  children: (
    <>
      <Navigate appearance={Appearance.Header} hover={Hover.Brightness}>
        First link
      </Navigate>
      <Dropdown appearance={Appearance.Header} hover={Hover.Brightness} label="Second link">
        Second dropdown
      </Dropdown>
      <Dropdown appearance={Appearance.Header} hover={Hover.Brightness} label="Third link">
        Thrid dropdown
      </Dropdown>
      <Navigate appearance={Appearance.Header} hover={Hover.Brightness}>
        Forth link
      </Navigate>
      <Navigate appearance={Appearance.Header} hover={Hover.Brightness}>
        Fifth link
      </Navigate>
    </>
  ),
};
