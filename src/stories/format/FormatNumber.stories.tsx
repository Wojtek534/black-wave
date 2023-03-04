import {Meta, StoryFn} from "@storybook/react"
import {FormatNumber} from "../../components/format/FormatNumber"

export default {
  title: "format/FormatNumber",
  component: FormatNumber,
} as Meta<typeof FormatNumber>
const Template: StoryFn<typeof FormatNumber> = (args) => (
  <FormatNumber {...args} />
)

export const Sample = Template.bind({})

Sample.args = {
  number: Math.random() * 100,
  decimalPlaces: 2,
  currency: "USD",
}
