import {Meta, StoryFn} from "@storybook/react"
import {InputNumber} from "../../components/form/InputNumber"

export default {
  title: "form/InputNumber",
  component: InputNumber,
} as Meta<typeof InputNumber>
const Template: StoryFn<typeof InputNumber> = (args) => (
  <InputNumber {...args} />
)

export const Sample = Template.bind({})

Sample.args = {
  value: 123,
  onChange: (value) => {
    console.log(value)
  },
}
