import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ToggleSwitch } from '../components/ToggleSwitch';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const On: Story = {
  args: {
    isOn: true,
    handleToggle: () => {},
  },
};

export const Off: Story = {
  args: {
    isOn: false,
    handleToggle: () => {},
  },
};

export const CustomColor: Story = {
  args: {
    isOn: true,
    handleToggle: () => {},
    onColor: "bg-green-300",
  },
};