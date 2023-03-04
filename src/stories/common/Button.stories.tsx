import {Meta, StoryFn} from "@storybook/react"

import {Button} from "../../components/common/Button"
import {
  Appearance,
  ButtonSize,
  FontWeight,
  Hover,
  Radius,
  Space,
} from "../../components/types"

// Conrols https://storybook.js.org/docs/react/essentials/controls
export default {
  title: "common/Button",
  component: Button,
  argTypes: {
    appearance: {control: "radio", options: Appearance},
    active: {control: "radio", options: Appearance},
    buttonSize: {control: "radio", options: ButtonSize},
    fontWeight: {control: "radio", options: FontWeight},
    hover: {control: "radio", options: Hover},
    radius: {control: "radio", options: Radius},
  },
} as Meta<typeof Template>
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

export const PrimaryOutline = Template.bind({})
PrimaryOutline.args = {
  appearance: Appearance.GrayOutline,
  fontWeight: FontWeight.SemiBold,
  hover: Hover.Brightness,
  radius: Radius.Medium,
  space: Space.None,
  title: "Sample title",
  isSubmit: false,
  children: "Label",
}

export const PrimaryFill = Template.bind({})
PrimaryFill.args = {
  appearance: Appearance.PrimaryFill,
  fontWeight: FontWeight.SemiBold,
  hover: Hover.Brightness,
  radius: Radius.Medium,
  space: Space.None,
  title: "Sample title",
  isSubmit: false,
  children: "Label",
}

export const PrimaryFillRounded = Template.bind({})
PrimaryFillRounded.args = {
  appearance: Appearance.PrimaryFill,
  fontWeight: FontWeight.SemiBold,
  hover: Hover.Brightness,
  radius: Radius.Large,
  space: Space.None,
  title: "Sample title",
  isSubmit: false,
  children: "Label",
}
