import {Meta, StoryFn} from "@storybook/react"
import {LoremIpsumLong, LoremIpsumMedium} from "../lorem-ipsum"
import {ColumnsFour} from "../../components/layout"

export default {
  title: "layout/ColumnsFour",
  component: ColumnsFour,
} as Meta<typeof ColumnsFour>
const Template: StoryFn<typeof ColumnsFour> = (args) => (
  <ColumnsFour {...args} />
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
      <div>
        Four child<p>{LoremIpsumMedium()}</p>
      </div>
    </>
  ),
}
