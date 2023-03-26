import { Meta, StoryFn } from '@storybook/react';

import { ButtonIcon } from '../../components/common/Button';
import {
  Appearance,
  ButtonIconSize,
  FontWeight,
  Hover,
  IconList,
  Radius,
  Space,
} from '../../components/types';
import { Icon } from '../../components/common/Icon';

export default {
  title: 'common/ButtonIcon',
  component: ButtonIcon,
  argTypes: {
    appearance: { control: 'radio', options: Appearance },
    active: { control: 'radio', options: Appearance },
    buttonIconSize: { control: 'radio', options: ButtonIconSize },
    fontWeight: { control: 'radio', options: FontWeight },
    hover: { control: 'radio', options: Hover },
    radius: { control: 'radio', options: Radius },
  },
} as Meta<typeof Template>;
const Template: StoryFn<typeof ButtonIcon> = (args) => <ButtonIcon {...args} />;

export const ButtonAsIcon = Template.bind({});
ButtonAsIcon.args = {
  appearance: Appearance.GrayOutline,
  fontWeight: FontWeight.SemiBold,
  hover: Hover.Brightness,
  radius: Radius.Medium,
  space: Space.None,
  title: 'Sample title',
  isSubmit: false,
  children: <Icon icon={IconList.CHAT_BUBBLE_LEFT} />,
};
