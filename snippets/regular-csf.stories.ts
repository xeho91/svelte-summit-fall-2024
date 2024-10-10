// Button.stories.ts

import type { Meta, StoryObj } from '@storybook/svelte';
import { fn } from '@storybook/test';

import Button from './button.svelte';

const meta = {
    title: 'Atom/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: { backgroundColor: { control: 'color' } },
    args: { onclick: fn() },
} satisfies Meta<Button>;

export default meta;

type Story = StoryObj<Button>;

export const Primary: Story = {
  args: { label: 'Button', primary: true },
};

export const Small: Story = {
    args: { label: 'Button', size: 'small' },
};