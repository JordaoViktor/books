import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Login, BookDetail } from '@screens/index';

export type RootStackParamListType = {
  Splash: undefined;
  Login: undefined;
  Home: undefined;
  BookDetail: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamListType>();

export const MainRoutes = () => (
  <Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Splash"
  >
    {/* <Screen name="Splash" component={Splash} /> */}

    <Screen name="Login" component={Login} />

    <Screen name="Home" component={Home} />
    <Screen name="BookDetail" component={BookDetail} />

  </Navigator>
);
