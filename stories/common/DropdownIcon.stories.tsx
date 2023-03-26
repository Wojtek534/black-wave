import { Meta, StoryFn } from '@storybook/react';

import { DropdownIcon } from '../../components/common/Dropdown';
import {
  Appearance,
  ButtonIconSize,
  FontWeight,
  Hover,
  IconList,
  Radius,
} from '../../components/types';
import { Icon } from '../../components/common/Icon';

export default {
  title: 'common/DropdownIcon',
  component: DropdownIcon,
  argTypes: {
    appearance: { control: 'radio', options: Appearance },
    active: { control: 'radio', options: Appearance },
    buttonSize: { control: 'radio', options: ButtonIconSize },
    fontWeight: { control: 'radio', options: FontWeight },
    hover: { control: 'radio', options: Hover },
    radius: { control: 'radio', options: Radius },
  },
} as Meta<typeof DropdownIcon>;
const Template: StoryFn<typeof DropdownIcon> = (args) => <DropdownIcon {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  label: 'Sample dropdown',
  appearance: Appearance.GrayOutline,
  fontWeight: FontWeight.SemiBold,
  hover: Hover.Brightness,
  radius: Radius.Medium,
  title: 'sample title',
  isArrow: true,
  children: (
    <>
      <div>First</div>
      <div>Second</div>
    </>
  ),
};
export const DropdownAsIcon = Template.bind({});
DropdownAsIcon.args = {
  label: <Icon icon={IconList.BOOKMARK} />,
  appearance: Appearance.GrayOutline,
  fontWeight: FontWeight.SemiBold,
  hover: Hover.Brightness,
  radius: Radius.Medium,
  title: 'sample title',
  isArrow: false,
  size: ButtonIconSize.Base,
  isIcon: true,
  children: (
    <>
      <div>First</div>
      <div>Second</div>
    </>
  ),
};

export const DropdownAsMoreActions = Template.bind({});
DropdownAsMoreActions.args = {
  label: <Icon icon={IconList.ELLIPSIS_VERTICAL} />,
  appearance: Appearance.GrayText,
  fontWeight: FontWeight.SemiBold,
  hover: Hover.Brightness,
  radius: Radius.Medium,
  title: 'sample title',
  isArrow: false,
  size: ButtonIconSize.Base,
  isIcon: true,
  children: (
    <>
      <div>First</div>
      <div>Second</div>
    </>
  ),
};
