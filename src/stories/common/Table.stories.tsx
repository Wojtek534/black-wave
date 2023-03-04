import {Meta, StoryFn} from "@storybook/react"
import {makeData} from "../data/makeData"
import {Table} from "../../components/common/Table"
import {cols, Person} from "../data/table.data"
export default {
  title: "common/Table",
  component: Table,
} as Meta<typeof Template>
const Template: StoryFn<typeof Table> = () => (
  <Table<Person> tableData={makeData(200)} columns={cols} />
)

export const Sample = Template.bind({})
Sample.args = {}
