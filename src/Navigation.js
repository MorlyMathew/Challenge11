// App.js
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator'; // Import the TabNavigator


const Navigation = () => (
  <NavigationContainer>
    
    <TabNavigator />
    {/* <StackNavigator /> */}
  </NavigationContainer>
);

export default Navigation;