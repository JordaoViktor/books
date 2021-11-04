import React from 'react';

import { Provider } from 'react-redux';
import { store } from '@store/index';

import { ThemeProvider } from 'styled-components';

import { Routes } from './src/routes/index.routes'
import { theme } from '@styles/index';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}