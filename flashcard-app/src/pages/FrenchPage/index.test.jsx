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
  
    it('renders French Page text', () => {
        const header = screen.getByText(/translate the word/i);
        expect(header).toBeInTheDocument();
    });

    it('renders Previous button', () => {
      const button = screen.getByRole('button', { name: /previous/i});
      expect(button).toBeInTheDocument();
    });

    it('renders Next button', () => {
      const button = screen.getByRole('button', { name: /next/i});
      expect(button).toBeInTheDocument();
    });

    it('renders Wrong button', () => {
      const button = screen.getByRole('button', { name: /wrong/i});
      expect(button).toBeInTheDocument();
    });

    /*it('renders flashcard text', async () => {
      await new Promise((r) => setTimeout(r, 2000));
      const header = screen.getByTestId("flashcard-component");
      expect(header).toBeInTheDocument();
    });

    it('renders text for score', async () => {
      const user = userEvent.setup();
      await new Promise((r) => setTimeout(r, 500));
      const button = screen.getByRole('button', { name: /next/i});
      expect(button).toBeInTheDocument();
      while (!screen.getByText(/score: /i)) {
        await user.click(button);
        await new Promise((r) => setTimeout(r, 100));
      }
      expect(screen.getByText(/score: /i)).toBeInTheDocument();
    });*/
});

