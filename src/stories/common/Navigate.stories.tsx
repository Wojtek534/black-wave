import {Meta, StoryFn} from "@storybook/react"
import {Navigate} from "../../components/common/index"
import {
  Appearance,
  ButtonIconSize,
  FontWeight,
  Radius,
  FontSize,
  Space,
  Hover,
  NavigationSize,
} from "../../components/types"

export default {
  title: "common/Navigate",
  component: Navigate,
  argTypes: {
    appearance: {control: "radio", options: Appearance},
    navigationSize: {control: "radio", options: NavigationSize},
    buttonIconSize: {control: "radio", options: ButtonIconSize},
    fontWeight: {control: "radio", options: FontWeight},
    hover: {control: "radio", options: Hover},
    radius: {control: "radio", options: Radius},
  },
} as Meta<typeof Template>
const Template: StoryFn<typeof Navigate> = (args) => <Navigate {...args} />

export const Sample = Template.bind({})
Sample.args = {
  appearance: Appearance.PrimaryText,
  href: "/",
  navigationSize: NavigationSize.Base,
  fontSize: FontSize.Base,
  fontWeight: FontWeight.SemiBold,
  space: Space.None,
  hover: Hover.Underline,
  radius: Radius.Medium,
  children: "Sample label",
}
