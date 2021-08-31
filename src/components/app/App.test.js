import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App test', () => {
  test('renders App with "Hello World"', () => {
    render(<App />);
    const element = screen.getByText(/hello world/i);
    expect(element).toBeInTheDocument();
  });
});

