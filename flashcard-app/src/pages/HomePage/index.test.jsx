import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

//import index from './';
import HomePage from '.';

describe('Home Page', () => {
  beforeEach(() => {
    render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('renders unique text', () => {
    const header = screen.getByText(/welcome to crammer!/i);
    expect(header).toBeInTheDocument();
  });

  it('renders create account button that links to /register', () => {
    const createAccountButton = screen.getByRole('link', { name: "CREATE AN ACCOUNT" });
    expect(createAccountButton).toHaveAttribute('href', '/register');
  });

  it('renders french button that links to /french', () => {
    const frenchButton = screen.getByRole('link', { name: "French 🇫🇷" });
    expect(frenchButton).toHaveAttribute('href', '/french');
  });

  it('renders spanish button that links to /spanish', () => {
    const spanishButton = screen.getByRole('link', { name: "Spanish 🇪🇸" });
    expect(spanishButton).toHaveAttribute('href', '/spanish');
  });
});
