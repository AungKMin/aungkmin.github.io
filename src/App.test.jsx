import { render, screen, within } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';

import App from './App.jsx';
import theme from './theme.js';

const renderApp = () => render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

test('redirects to the about page and renders its introduction', () => {
  renderApp();
  expect(screen.getByText("Hello! I'm Aung.")).toBeInTheDocument();
});

test('renders the drawer with navigation links', () => {
  renderApp();
  const nav = within(screen.getByRole('navigation'));
  expect(nav.getByText('Aung Khant')).toBeInTheDocument();
  expect(nav.getByRole('link', { name: /GitHub/ })).toBeInTheDocument();
});
