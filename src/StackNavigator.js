// StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InmakesHome from './InmakesHome'; // Replace with your actual screen components

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen  options={{headerShown : false}}   name="InmakesHome" component={InmakesHome} />
    {/* Add more screens as needed */}
  </Stack.Navigator>
);

export default StackNavigator;
