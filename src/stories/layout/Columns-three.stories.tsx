import {Meta, StoryFn} from "@storybook/react"
import {LoremIpsumLong, LoremIpsumMedium} from "../lorem-ipsum"
import {ColumnsThree} from "../../components/layout"

export default {
  title: "layout/ColumnsThree",
  component: ColumnsThree,
} as Meta<typeof ColumnsThree>
const Template: StoryFn<typeof ColumnsThree> = (args) => (
  <ColumnsThree {...args} />
)

export const Sample = Template.bind({})
Sample.args = {
  children: (
    <>
      <div>
        First child
        <p>{LoremIpsumLong()}</p>
      </div>
      <div>
        Second child<p>{LoremIpsumMedium()}</p>
      </div>
      <div>
        Third child<p>{LoremIpsumMedium()}</p>
      </div>
    </>
  ),
}
