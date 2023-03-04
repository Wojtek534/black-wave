import {Meta, StoryFn} from "@storybook/react"
import {Label} from "../../components/form/Label"

export default {
  title: "form/Label",
  component: Label,
} as Meta<typeof Label>
const Template: StoryFn<typeof Label> = (args) => <Label {...args} />

export const Sample = Template.bind({})

Sample.args = {
  children: <p>Label value</p>,
}
