import {Meta, StoryFn} from "@storybook/react"
import {FormatDate} from "../../components/format/FormatDate"

export default {
  title: "format/FormatDate",
  component: FormatDate,
} as Meta<typeof FormatDate>
const Template: StoryFn<typeof FormatDate> = (args) => <FormatDate {...args} />

export const Sample = Template.bind({})

Sample.args = {
  date: new Date(),
}
