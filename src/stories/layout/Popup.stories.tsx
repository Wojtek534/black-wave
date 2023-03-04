import {Meta, StoryFn} from "@storybook/react"
import {LoremIpsumLong} from "../lorem-ipsum"
import {Popup} from "../../components/layout/Popup"

export default {
  title: "layout/Popup",
  component: Popup,
} as Meta<typeof Popup>
const Template: StoryFn<typeof Popup> = (args) => <Popup {...args} />

export const Sample = Template.bind({})
Sample.args = {
  header: "Popup header",
  isOpen: true,
  onClose: () => {
    console.log("Close")
  },
  children: LoremIpsumLong(),
}
