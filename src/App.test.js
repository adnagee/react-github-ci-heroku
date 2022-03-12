import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/connect a React app to both github and heroku/i);
  expect(linkElement).toBeInTheDocument();
});
