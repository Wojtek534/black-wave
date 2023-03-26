import { Meta, StoryFn } from '@storybook/react';
import { LoremIpsumLong } from '../lorem-ipsum';
import { Dropdown } from '../../components/common/Dropdown';

import { SiteHeader } from '../../components/layout/SiteHeader';
import { Appearance, Hover } from '../../components/types';
import { Navigate } from '../../components/common';
import { Layout } from '../../components/layout';

export default {
  title: 'layout/Layout',
  component: Layout,
} as Meta<typeof Layout>;
const Template: StoryFn<typeof Layout> = (args) => <Layout {...args} />;

export const Default = Template.bind({});

Default.args = {
  header: (
    <>
      <SiteHeader name={'Sample page'}>
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
      </SiteHeader>
    </>
  ),
  children: LoremIpsumLong(),
};
