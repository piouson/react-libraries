import { KeyValueString } from './Button.types';

const styles: KeyValueString = {
  base: 'whitespace-nowrap transition-colors ease-in-out duration-300',
  disabled: 'disabled:opacity-50 disabled:cursor-not-allowed',
  font: 'font-medium leading-5',
  active: 'active:bg-sky-600',
  hoverPrimary: 'hover:bg-sky-700',
  hoverSecondary: 'hover:bg-sky-100',
  hoverGhost: 'border-transparent',
  cursor: 'cursor-pointer',
  cursorWait: 'cursor-wait',
  focus: 'focus:outline-none focus:ring focus:ring-sky-300',
  border: 'border-2',
  borderHidden: 'border-transparent',
  borderColor: 'border-sky-600',
  rounded: 'rounded-md',
  large: 'px-10 py-4',
  medium: 'px-5 py-3',
  regular: 'px-4 py-2',
  small: 'px-3 py-1',
  full: 'w-full',
  wide: 'w-3/4',
  half: 'w-1/2',
  bg: 'bg-sky-600',
  bgInherit: 'bg-inherit',
  colorMain: 'text-white',
  colorAlt: 'text-sky-600',
  get btn() {
    return [this.base, this.disabled, this.font, this.active, this.focus].join(
      ' '
    );
  },
  get primary() {
    return [
      this.border,
      this.borderHidden,
      this.bg,
      this.colorMain,
      this.hoverPrimary,
    ].join(' ');
  },
  get secondary() {
    return [
      this.border,
      this.borderColor,
      this.colorAlt,
      this.hoverSecondary,
    ].join(' ');
  },
  get ghost() {
    return [this.colorAlt, this.hoverGhost, this.bgInherit].join(' ');
  },
};

export default styles;
