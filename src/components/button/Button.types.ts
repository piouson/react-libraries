import { MouseEventHandler } from 'react';

export type ButtonType = {
  label: string;
  size?: 'large' | 'medium' | 'small' | 'wide' | 'full';
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  rounded?: boolean;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  style?: { [key: string]: string };
  'aria-label'?: string;
};
