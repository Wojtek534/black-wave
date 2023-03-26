import { Meta, StoryFn } from '@storybook/react';
import { LoremIpsumLong } from '../lorem-ipsum';
import { Button } from '../../components/common/Button';

import { Panel } from '../../components/layout/Panel';
import { Appearance } from '../../components/types';

export default {
  title: 'layout/Panel',
  component: Panel,
  argTypes: {
    appearance: { control: 'radio', options: Appearance },
  },
} as Meta<typeof Panel>;
const Template: StoryFn<typeof Panel> = (args) => <Panel {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  name: 'Sample panel',
  margin: 'mb-2',
  appearance: Appearance.GrayTransparent,
  showHeader: true,
  children: LoremIpsumLong(),
};
const custom = {
  disabled: true,
  style: { background: 'red' },
};
export const PanelWithCustomBtn = Template.bind({});
PanelWithCustomBtn.args = {
  name: 'Panel with custom button',
  action: (
    <Button appearance={Appearance.GrayFill} {...custom}>
      Btn with customs
    </Button>
  ),
  margin: 'mb-2',
  appearance: Appearance.GrayTransparent,
  showHeader: true,
};
