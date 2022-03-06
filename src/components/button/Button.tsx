import React from 'react';
import clsx from 'clsx';
import { ButtonType } from './Button.types';
import styles from './Button.module.css';

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
    aria-label={variant === 'ghost' ? label : ''}
    className={clsx(styles.btn, className, styles[variant], styles[size], {
      [styles.active]: active,
      [styles.disabled]: disabled,
      [styles.rounded]: rounded,
    })}
    disabled={disabled}
    onClick={onClick}
    style={style}
  >
    {label}
  </button>
);

export default Button;
