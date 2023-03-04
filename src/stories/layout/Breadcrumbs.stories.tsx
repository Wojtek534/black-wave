import {Meta, StoryFn} from "@storybook/react"
import {Breadcrumbs} from "../../components/layout"

export default {
  title: "layout/Breadcrumbs",
  component: Breadcrumbs,
} as Meta<typeof Template>
const Template: StoryFn<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args} />
)

export const Sample = Template.bind({})
Sample.args = {
  items: [
    {name: "First", url: "/"},
    {name: "Second", url: "/"},
    {name: "Third", url: "/"},
  ],
}
