import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Button.stories';

describe('Button tests', () => {
  const { Primary } = composeStories(stories);

  test('No accessibility violations', async () => {
    console.log({ stories });
    const { container } = render(<Primary />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
