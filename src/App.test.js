import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});


test('text case', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Piaic/i);
  expect(linkElement).toBeInTheDocument();
});

test('text case2', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Sir/i);
  expect(linkElement).toBeInTheDocument();
});