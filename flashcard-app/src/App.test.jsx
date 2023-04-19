import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('renders the Header component', () => {
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('renders Home Page by default', () => {
    const header = screen.getByText(/welcome to crammer!/i);
    expect(header).toBeInTheDocument();
  });

  it('has anchor tag with reference of Dasboard Page', async () => {
    const dashLink = screen.getByText('Dashboard').closest('a');
    expect(dashLink).toHaveAttribute('href', '/dashboard');
  });"npm"
});
