import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home/Home';
import { SignUp } from '../screens/SignUp/SignUp';
import Header from '../shared/Header';
import SignUpHeader from '../shared/SignUpHeader';

const Stack = createStackNavigator();

interface Props {}

const MyStack = (props: Props) => {
  return (
    <Stack.Navigator initialRouteName='SignUp'>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerTitle: (props) => <Header />,

          headerStyle: {
            backgroundColor: '#000',
            height: 85,
          },
        }}
      />
      <Stack.Screen
        name='SignUp'
        component={SignUp}
        options={{
          headerTitle: (props) => <SignUpHeader />,

          headerStyle: {
            backgroundColor: '#000',
            height: 85,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
