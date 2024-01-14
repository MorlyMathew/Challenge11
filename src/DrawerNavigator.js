// DrawerNavigator.js
import React from 'react';
import {  createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator'; // Import the StackNavigator
import SettingsScreen from './SettingsScreen'; // Replace with your actual screen components
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator 
  drawerContent={(props) => <DrawerContent{...props}/>}
  // screenOptions={{
  //   drawerType:"slide",
  //   // overlayColor:Colors.transparent,
  //   drawerStyle:{
  //     backgroundColor:'#002333',
      
  //   }
  // }}
  >
    <Drawer.Screen options={{headerShown : false}} name="Home" component={StackNavigator} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
    {/* Add more screens as needed */}
  </Drawer.Navigator>
);

export default DrawerNavigator;
