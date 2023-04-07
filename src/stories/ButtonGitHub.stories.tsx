import type { Meta, StoryObj } from '@storybook/react';
import { ButtonBaseProps, ButtonGitHub } from '../components/ButtonGitHub';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Buttons/ButtonGitHub',
  component: ButtonGitHub,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGitHub>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Example: Story = {
  args: {
    label: 'Button',
    link: '',
  },

  render: (args: ButtonBaseProps) => <ButtonGitHub {...args} />,
};

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
