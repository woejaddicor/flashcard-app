import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import FrenchPage from '.';

describe('App', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <FrenchPage testing={true} />
        </MemoryRouter>
      );
    });
  
    afterEach(() => {
      cleanup();
    });
  
    it('renders Previous button', () => {
      const button = screen.getByRole('button', { name: /score:/i});
      expect(button).toBeInTheDocument();
    });

});

