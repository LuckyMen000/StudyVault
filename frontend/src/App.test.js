import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import StudyVaultRoutes from '../src/Routes/AppRouter';

test('renders login page when URL is /login', () => {
  render(
    <MemoryRouter initialEntries={['/login']}>
      <StudyVaultRoutes />
    </MemoryRouter>
  );

  const loginElement = screen.getByText(/Login/i);
  expect(loginElement).toBeInTheDocument();
});

test('renders profile page when URL is /profile', () => {
  render(
    <MemoryRouter initialEntries={['/profile']}>
      <StudyVaultRoutes />
    </MemoryRouter>
  );

  const profileElement = screen.getByText(/Profile/i);
  expect(profileElement).toBeInTheDocument();
});