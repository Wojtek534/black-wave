import {Meta, StoryFn} from "@storybook/react"
import {Login} from "./Login"

export default {
  title: "example/Login",
  component: Login,
} as Meta<typeof Template>
const Template: StoryFn<typeof Login> = (args) => <Login {...args} />

export const Sample = Template.bind({})
