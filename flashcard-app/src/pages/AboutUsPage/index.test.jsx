import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import AboutUsPage from '.';

describe('Register Page', () => {
    beforeEach(() => {
      render(
      <MemoryRouter>
        <AboutUsPage />
      </MemoryRouter>
      );
    });
  
    afterEach(() => {
      cleanup();
    });

    it('navigates to Our Story and displays more text on click', async () => {
        const ourStoryAccordian = screen.getByTestId('accordion1');
        await userEvent.click(ourStoryAccordian);
        expect(screen.getByTestId('our-story-content')).toBeInTheDocument();
      });
});

