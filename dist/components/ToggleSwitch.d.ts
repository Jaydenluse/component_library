import React from 'react';
interface ToggleSwitchProps {
    isOn: boolean;
    handleToggle: () => void;
    onColor?: string;
}
export declare const ToggleSwitch: React.FC<ToggleSwitchProps>;
export {};
