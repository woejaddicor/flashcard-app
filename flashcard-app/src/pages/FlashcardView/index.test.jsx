import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import FlashcardView from '.';

describe('App', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <FlashcardView testing={true} />
        </MemoryRouter>
      );
    });
  
    afterEach(() => {
      cleanup();
    });
  
    it('renders text for revealing answer', () => {
        const header = screen.getByText(/view all flashcards/i);
        expect(header).toBeInTheDocument();
    });
});

