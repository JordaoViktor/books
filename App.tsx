import React from 'react';

import { Provider } from 'react-redux';
import { store } from '@store/index';
import Reactotron from 'reactotron-react-native'
import { ThemeProvider } from 'styled-components';

import { Routes } from './src/routes/index.routes'
import { theme } from '@styles/index';

import {
  useFonts,
  Heebo_300Light,
  Heebo_400Regular,
  Heebo_500Medium
} from '@expo-google-fonts/heebo';

import AsyncStorage from '@react-native-async-storage/async-storage';
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

  if (__DEV__) {
    const reactotronSettings = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
      .configure() // controls connection & communication settings
      .useReactNative() // add all built-in react native plugins
      .connect(); // let's connect!

    reactotronSettings.clear()
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}