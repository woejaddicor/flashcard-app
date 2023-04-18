import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FlashcardNavigator from '.';

describe('FlashcardNavigator component', () => {
    beforeEach(() => {
        render(
            <FlashcardNavigator />);
    });

    it('renders a "Previous Phrase" button', async() => {

        const button = screen.getByRole("button");
        await userEvent.click(button);
    });

    afterEach(() => {
        cleanup();
    });
});
