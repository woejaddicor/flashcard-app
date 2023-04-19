import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import DashboardPage from '.';

describe('App', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <DashboardPage testing={true} />
        </MemoryRouter>
      );
    });
  
    afterEach(() => {
      cleanup();
    });
  
    it('renders Dashboard Page text', () => {
        const header = screen.getByText(/dashboard page/i);
        expect(header).toBeInTheDocument();
      });
  });
