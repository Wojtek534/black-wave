import {Meta, StoryFn} from "@storybook/react"
import {Badge} from "../../components/ui/Badge"

export default {
  title: "ui/Badge",
  component: Badge,
} as Meta<typeof Template>
const Template: StoryFn<typeof Badge> = (args) => <Badge {...args} />

export const Sample = Template.bind({})
Sample.args = {}
