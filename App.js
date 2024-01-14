import React from "react";
import { View,StyleSheet,TextInput,ImageBackground,Image,TouchableHighlight,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerNavigator from "./src/DrawerNavigator";
import TabContent from "./src/TabContent";
import Navigation from "./src/Navigation";
import Login from "./src/Login";
import HomePage from "./src/HomePage";
import RegisterPage from "./src/RegisterPage";
import SchoolBoard from "./src/SchoolBoard";
import AppTour from "./src/AppTour";
import InmakesHome from "./src/InmakesHome";
import { color } from "react-native-reanimated";
import { Colors } from "react-native/Libraries/NewAppScreen";
import DrawerContent from "./src/DrawerContent";
import TabNavigator from "./src/TabNavigator";
import SubjectDetails from "./src/SubjectDetails";
import Subjectvideo from "./src/Subjectvideo";

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator();


function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
       options={{headerShown:false }}
       name="Login"
       component={Login}/>

<Stack.Screen
       options={{headerShown:false}}
       name="HomePage"
       component={HomePage}/>

<Stack.Screen
       options={{headerShown:false}}
       name="SubjectDetails"
       component={SubjectDetails}/>
       
 <Stack.Screen
       options={{headerShown:false}}
       name="RegisterPage"
       component={RegisterPage}/>
       <Stack.Screen
       options={{headerShown:false}}
       name="SchoolBoard"
       component={SchoolBoard}/>

     <Stack.Screen
       options={{headerShown:false}}
       name="AppTour"
       component={AppTour}/> 
         <Stack.Screen
       options={{headerShown:false}}
       name="Navigation"
       component={Navigation}/> 
 <Stack.Screen
       options={{headerShown:false}}
       name="InmakesHome"
       component={InmakesHome}/> 
  
  <Stack.Screen
       options={{headerShown:false}}
       name="Subjectvideo"
       component={Subjectvideo}/> 

      <Stack.Screen
       name='Tab'
       component={MyTab}
       options={{headerShown : false}}/> 

       <Stack.Screen
       options={{headerShown:false
      }}
       name="Drawer"
       component={MyDrawer}/>

    </Stack.Navigator>
  )
}

function MyDrawer(){
  return(
    <Drawer.Navigator
    drawerContent={(props) => <DrawerContent{...props}/>}
      screenOptions={{
        drawerType:"slide",
        overlayColor:Colors.transparent,
        drawerStyle:{
          backgroundColor:'#002333',
          
        }
      }}>
      <Drawer.Screen
      options={{headerShown:false}}
         name="InmakesHome"
        //  component={InmakesHome}
         component={TabNavigator} 
         />

{/* <Drawer.Screen
         name="demo"
         component={demo}
         /> */}
    </Drawer.Navigator>
  )
}
function MyTab(){
  
  <Tab.Navigator 
  tabBar={(props) => <TabContent{...props}/>} 
  
  >
    <Tab.Screen
    //  options={{headerShown : false}} 
     name="Home" component={DrawerNavigator} 
    //  options={{
    //   headerShown : false,
    //   tabBarLabel: 'Home',
    //   tabBarIcon: ({ color, size }) => (
    //     // Set the selected and unselected icon for Tab 1
    //     <Image source={require('./imgs/Menu.png')} style={{ tintColor: color, width: size, height: size }} />
    //   ),
    // }} 
      />
    <Tab.Screen
      name='Profile'
      component={ProfileScreen}
      // options={{
      //   tabBarLabel: 'Profile',
      //   tabBarIcon: ({ color, size }) => (
      //     // Set the selected and unselected icon for Tab 1
      //     <Image source={require('./imgs/Menu.png')} style={{ tintColor: color, width: size, height: size }} />
      //   ),
      // }}   
  />
    {/* Add more tabs as needed */}
  </Tab.Navigator>
}


export default function App(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}