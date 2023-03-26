import { Meta, StoryFn } from '@storybook/react';
import { ColumnsTwo } from '../../components/layout';
import { LoremIpsumLong, LoremIpsumMedium } from '../lorem-ipsum';

export default {
  title: 'layout/ColumnsTwo',
  component: ColumnsTwo,
} as Meta<typeof ColumnsTwo>;
const Template: StoryFn<typeof ColumnsTwo> = (args) => <ColumnsTwo {...args} />;

export const Sample = Template.bind({});
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
    </>
  ),
};
