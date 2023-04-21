import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import NotFound from '.';

describe('Login Page', () => {
  beforeEach(() => {
    render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('renders 404 text', () => {
    const header = screen.getByText(/404 Not Found/i);
    expect(header).toBeInTheDocument();
  });
});
