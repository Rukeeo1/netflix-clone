import 'react-native-gesture-handler';
import React, { FC, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './screens/Home/Home';
import { SignUp } from './screens/SignUp/SignUp';
import MyStack from './navigation/MyStack';

const App: FC = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
