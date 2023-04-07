import type { Meta, StoryObj } from '@storybook/react';
import { ButtonDarkMode } from '../components/ButtonDarkMode';

const meta = {
  title: 'Buttons/ButtonDarkMode',
  component: ButtonDarkMode,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonDarkMode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => (<ButtonDarkMode/>),
};
