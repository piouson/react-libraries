import React from 'react';
import { expect } from '@storybook/jest';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import Button from './Button';
import { ButtonType } from './Button.types';

type Play = { args: ButtonType; canvasElement: HTMLElement };

const actions = {
  play: ({ args, canvasElement }: Play) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getByRole('button'));
    expect(args.onClick).toHaveBeenCalled();
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const bindTemplate = () => {
  const component = Template.bind({});
  component.play = actions.play;
  return component;
};

export const Primary = bindTemplate();
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'primary',
  label: 'Primary Button',
};

export const Secondary = bindTemplate();
Secondary.args = {
  variant: 'secondary',
  label: 'Secondary Button',
};

export const Ghost = bindTemplate();
Ghost.args = {
  variant: 'ghost',
  label: 'Ghost Button',
};

export const Full = bindTemplate();
Full.args = {
  size: 'full',
  label: 'Full Button',
};

export const Wide = bindTemplate();
Wide.args = {
  size: 'wide',
  label: 'Wide Button',
};

export const Large = bindTemplate();
Large.args = {
  size: 'large',
  label: 'Large Button',
};

export const Small = bindTemplate();
Small.args = {
  size: 'small',
  label: 'Small Button',
};
