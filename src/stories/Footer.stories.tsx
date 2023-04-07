import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const meta = {
  title: 'Footer',
  component: Footer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
