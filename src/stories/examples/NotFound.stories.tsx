import {StoryFn, Meta} from "@storybook/react"
import {NotFound} from "./NotFound"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "example/NotFound",
  component: NotFound,
} as Meta<typeof NotFound>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof NotFound> = (args) => <NotFound {...args} />

export const NotFoundPage = Template.bind({})
