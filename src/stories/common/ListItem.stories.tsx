import {Meta, StoryFn} from "@storybook/react"

import {ListItem} from "../../components/common/List"
import {Appearance, Space, Hover, ListItemSize} from "../../components/types"

export default {
  title: "common/ListItem",
  component: ListItem,
  argTypes: {
    appearance: {control: "radio", options: Appearance},
    listItemSize: {control: "radio", options: ListItemSize},
    space: {control: "radio", options: Space},
    hover: {control: "radio", options: Hover},
  },
} as Meta<typeof ListItem>
const custom = {style: {cursor: "pointer"}}
const Template: StoryFn<typeof ListItem> = (args) => (
  <ListItem {...args} {...custom} />
)

export const Sample = Template.bind({})
Sample.args = {
  appearance: Appearance.GrayFill,
  listItemSize: ListItemSize.Base,
  space: Space.Base,
  hover: Hover.Brightness,
  children: "Lorem ipsum",
}
