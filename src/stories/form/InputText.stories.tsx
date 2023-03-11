import {Meta, StoryFn} from "@storybook/react"
import {InputText} from "../../components/form/InputText"

export default {
  title: "form/InputText",
  component: InputText,
} as Meta<typeof InputText>
const Template: StoryFn<typeof InputText> = (args) => <InputText {...args} />

export const Sample = Template.bind({})

Sample.args = {
  value: "Lorem Ipsum",
  onChange: (value) => {
    console.log(value)
  },
}
