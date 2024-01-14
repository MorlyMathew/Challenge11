// TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerNavigator from './DrawerNavigator'; // Import the DrawerNavigator
import ProfileScreen from './ProfileScreen';

import TabContent from './TabContent'
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
 
  <Tab.Navigator 
  tabBar={(props) => <TabContent{...props}/>} 
  
  >
    <Tab.Screen
    //  options={{headerShown : false}} 
     name="Home" component={DrawerNavigator} 
     options={{
      headerShown : false,
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        // Set the selected and unselected icon for Tab 1
        <Image source={require('./imgs/Menu.png')} style={{ tintColor: color, width: size, height: size }} />
      ),
    }}   />
    <Tab.Screen
      name='Profile'
      
      component={ProfileScreen}
      options={{
        headerShown:false,
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          // Set the selected and unselected icon for Tab 1
          <Image source={require('./imgs/Menu.png')} style={{ tintColor: color, width: size, height: size }} />
        ),
      }}   
  />
    {/* Add more tabs as needed */}
  </Tab.Navigator>
 
);

export default TabNavigator;
