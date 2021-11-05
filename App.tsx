import React from 'react';

import { Provider } from 'react-redux';
import { store } from '@store/index';

import { ThemeProvider } from 'styled-components';

import { Routes } from './src/routes/index.routes'
import { theme } from '@styles/index';

import {
  useFonts,
  Heebo_300Light,
  Heebo_400Regular,
  Heebo_500Medium
} from '@expo-google-fonts/heebo';

import AppLoading from 'expo-app-loading';

export default function App() {

  let [fontsLoaded] = useFonts({
    Heebo_300Light,
    Heebo_400Regular,
    Heebo_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}