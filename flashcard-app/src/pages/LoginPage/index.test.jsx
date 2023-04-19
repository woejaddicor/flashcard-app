import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

//import index from './';
import LoginPage from '.';

describe('Login Page', () => {
  beforeEach(() => {
    render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('renders username input with text', () => {
    const inputs = screen.getByTestId('username-input')
    expect(inputs).toBeInTheDocument();
    expect(inputs).toHaveAttribute('placeholder', 'Enter Username');
  });

  it('renders password input with text', () => {
    const inputs = screen.getByTestId('password-input')
    expect(inputs).toBeInTheDocument();
    expect(inputs).toHaveAttribute('placeholder', 'Enter Password');
  });

  it('renders button that has text Login', () => {
    const button = screen.getByRole('button', { name: "Login" });
    expect(button).toBeInTheDocument();
  });
});
