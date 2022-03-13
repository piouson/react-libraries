import React from 'react';
import clsx from 'clsx';
import { ButtonType } from './Button.types';
import './Button.css';
import '../../styles/tailwind.css';
import styles from './Button.styles';

const Button: React.FC<ButtonType> = ({
  active,
  className,
  disabled,
  label,
  onClick,
  size = 'medium',
  style,
  rounded,
  variant = 'primary',
}) => (
  <button
    className={clsx(styles.btn, 'btn bg-sky-800', className, variant, size, {
      active,
      disabled,
      rounded,
    })}
    disabled={disabled}
    onClick={onClick}
    style={style}
    {...(variant === 'ghost' ? { 'aria-label': label } : {})}
  >
    {label}
  </button>
);

export default Button;
