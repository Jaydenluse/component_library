import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Card } from '../components/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    children: <p>This is the content of the card.</p>,
  },
};

export const NoTitle: Story = {
  args: {
    children: <p>This is a card without a title.</p>,
  },
};