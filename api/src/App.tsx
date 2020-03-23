import './pages';
import React from 'react';
import { Router } from 'components';
import { ContextProviders } from './app/context';

export function App() {
  return (
    <ContextProviders>
      <Router />
    </ContextProviders>
  );
}
