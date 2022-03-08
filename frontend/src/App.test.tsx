import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders templates link', () => {
  render(<App />);
  const linkElement = screen.getByText(/templates/i);
  expect(linkElement).toBeInTheDocument();
});