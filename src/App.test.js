import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/demo react github heroku ci/i);
  expect(linkElement).toBeInTheDocument();
});
