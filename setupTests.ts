/// <reference types="@types/jest" />
import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';
import { cleanup } from '@testing-library/react';

expect.extend(toHaveNoViolations);

afterEach(() => {
  cleanup();
});
