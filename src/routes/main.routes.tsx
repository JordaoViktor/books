import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '@screens/index';

export type RootStackParamListType = {
  Splash: undefined;
  Login: undefined;
  Home: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamListType>();

export const MainRoutes = () => (
  <Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Splash"
  >
    <Screen name="Login" component={Login} />
    {/* 
    <Screen name="Home" component={Home} />

    <Screen name="Splash" component={Splash} /> */}
  </Navigator>
);
