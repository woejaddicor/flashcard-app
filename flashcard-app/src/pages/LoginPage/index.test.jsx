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
    const usernameInput = screen.getByRole('input', { name: "username" });
    expect(usernameInput).toHaveAttribute('placeholder', 'Enter Username');
  });

  it('renders password input with text', () => {
    const frenchButton = screen.getByRole('input', { name: "password" });
    expect(frenchButton).toHaveAttribute('placeholder', 'Enter Password');
  });
});
