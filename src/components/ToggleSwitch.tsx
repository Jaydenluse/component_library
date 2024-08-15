import React from 'react';

interface ToggleSwitchProps {
  isOn: boolean;
  handleToggle: () => void;
  onColor?: string;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, handleToggle, onColor = 'bg-blue-500' }) => {
  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isOn}
          onChange={handleToggle}
        />
        <div className={`block ${isOn ? onColor : 'bg-gray-600'} w-14 h-8 rounded-full`}></div>
        <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${isOn ? 'transform translate-x-6' : ''}`}></div>
      </div>
    </label>
  );
};