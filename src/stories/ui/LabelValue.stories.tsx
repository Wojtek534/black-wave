import {Meta, StoryFn} from "@storybook/react"
import {LabelValue} from "../../components/ui/LabelValue"

export default {
  title: "ui/LabelValue",
  component: LabelValue,
} as Meta<typeof Template>
const Template: StoryFn<typeof LabelValue> = (args) => <LabelValue {...args} />

export const Sample = Template.bind({})
Sample.args = {}
