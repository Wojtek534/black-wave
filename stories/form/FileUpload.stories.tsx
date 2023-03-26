import { Meta, StoryFn } from '@storybook/react';
import { FileUpload } from '../../components/form/FileUpload';

export default {
  title: 'form/FileUpload',
  component: FileUpload,
} as Meta<typeof FileUpload>;
const Template: StoryFn<typeof FileUpload> = (args) => <FileUpload {...args} />;

export const Sample = Template.bind({});
