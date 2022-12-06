import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeMainCard } from "../screens/Home/HomeCard";
import { SignUp } from '../screens/SignUp/SignUp';
import Header from '../shared/Header';
import SignUpHeader from '../shared/SignUpHeader';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeMainCard}
        options={{
          headerLeft: () => null,
          headerTitle: () => <Header title={""} />,

          headerStyle: {
            backgroundColor: "#000",
            height: 80,
          },
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerTitle: () => <SignUpHeader />,

          headerStyle: {
            backgroundColor: "#000",
            height: 80,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
