import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import RegisterPage from '.';

describe('Register Page', () => {
    beforeEach(() => {
      render(
      <MemoryRouter>
        <RegisterPage />
      </MemoryRouter>
      );
    });
  
    afterEach(() => {
      cleanup();
    });
  
    it('renders username input with text', () => {
      const inputs = screen.getByTestId('repeat-password')
      expect(inputs).toBeInTheDocument();
      expect(inputs).toHaveAttribute('placeholder', 'Repeat Password');
    });

    it('renders button that has text Login', () => {
        const button = screen.getByRole('button', { name: "Register" });
        expect(button).toBeInTheDocument();
      });

    it('has anchor tag with reference to Login Page', async () => {
      const dashLink = screen.getByText('Log in').closest('a');
      expect(dashLink).toHaveAttribute('href', '/login');
    });
  });
