import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import FlashcardCreate from '.';

describe('App', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <FlashcardCreate testing={true} />
        </MemoryRouter>
      );
    });
  
    afterEach(() => {
      cleanup();
    });
  
    it('renders text for creating new flashcard', () => {
        const header = screen.getByText(/create a new flashcard/i);
        expect(header).toBeInTheDocument();
    });

    it('renders Create Flashcard button', () => {
      const button = screen.getByRole('button', { name: /create flashcard/i});
      expect(button).toBeInTheDocument();
    });

    it('renders Back to Dashboard button', () => {
      const button = screen.getByRole('button', { name: /back to dashboard/i});
      expect(button).toBeInTheDocument();
    });
});

