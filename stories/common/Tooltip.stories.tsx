import { Meta, StoryFn } from '@storybook/react';
import { LoremIpsumLong } from '../lorem-ipsum';
import { Tooltip } from '../../components/common/Tooltip';

export default {
  title: 'common/Tooltip',
  component: Tooltip,
} as Meta<typeof Tooltip>;
const Template: StoryFn<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const HoverTooltip = Template.bind({});
HoverTooltip.args = {
  trigger: 'hover',
  target: <p>Hover me</p>,
  children: <p>{LoremIpsumLong()}</p>,
};

export const ClickTooltip = Template.bind({});
ClickTooltip.args = {
  trigger: 'click',
  target: <p>Click me</p>,
  children: <p>{LoremIpsumLong()}</p>,
};
