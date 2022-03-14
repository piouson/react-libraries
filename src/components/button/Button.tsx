import clsx from 'clsx';
import { ButtonType } from './Button.types';
import '../../styles/tailwind.css';
import styles from './Button.styles';

const Button: React.FC<ButtonType> = ({
  className,
  disabled,
  label,
  loading = false,
  onClick,
  size = 'regular',
  width = '',
  style,
  rounded = true,
  variant = 'primary',
}) => (
  <button
    className={clsx(
      styles.btn,
      styles[size],
      {
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
        [styles.ghost]: variant === 'ghost',
        [styles.rounded]: rounded,
        [styles[width]]: width && variant !== 'ghost',
        [styles[size]]: styles[size] && variant !== 'ghost',
        [styles.cursor]: !loading,
        [styles.cursorWait]: loading,
      },
      className
    )}
    disabled={disabled}
    onClick={onClick}
    style={style}
  >
    {label}
  </button>
);

export default Button;
