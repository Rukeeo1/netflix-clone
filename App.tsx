import 'react-native-gesture-handler';
import React, { FC, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeCard } from "./screens/Home/HomeCard";
import { SignUp } from './screens/SignUp/SignUp';
import MyStack from './navigation/MyStack';
import TabNavigator from './navigation/TabStack';

const App: FC = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
