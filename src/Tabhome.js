import React,{Component} from "react";
import { View,StyleSheet,TextInput,SafeAreaView,ImageBackground,Image,TouchableHighlight,Text,FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InmakesHome from "./InmakesHome";
import Profile from "./Profile";
import CustomTabBar from "./Tab/CustomTabBar";
const Tab = createBottomTabNavigator();

export default class Tabhome  extends Component{
  
  
  render()
  {
    return(
      // <NavigationContainer>
        <Tab.Navigator 
        
        tabBar={(props) => <CustomTabBar{...props}/>}
         screenOptions={{
          tabBarActiveTintColor: "#00C458",
          tabBarInactiveTintColor: '#C2C2C2',
          
        }}
        >
        <Tab.Screen
              name='InmakesHome'
              component={InmakesHome}
              options={{headerShown : false}}          
          />
        
        <Tab.Screen
            name='Profile'
             component={Profile}
                       
          />
        </Tab.Navigator>
        // </NavigationContainer>
        )
  }
}

    
const styles = StyleSheet.create({
container :{
    height : '100%',
    width : '100%' ,
    backgroundColor :'#ffffff'   
  }, 
  img_container :{
    height : '100%',
    width : '100%',
    alignItems :"center",
    justifyContent:"center"   
  }, 
  image_style:{
    height: 30,
    width :30,
    flex:0.8
  }, 
  image_style_drawable:{
    height: 35,
    width :35,
  
  }, 
  textinput_style:{
    height: 60,
    width :'30%',
    color:'#ffffff',
    borderRadius :5,
    fontSize:14,
    textAlign:'center',
    fontFamily:'Gilroy-Regular',
    textAlignVertical:'center',
    backgroundColor :'#13394A'
  }, 
  textinputstyle:{
    height: 60,
    width :'68%',
    marginLeft:10,
    fontSize:14,
    fontFamily:'Gilroy-Regular',
    textAlignVertical:'center',
    borderRadius :5,
    color:'#ffffff',
    backgroundColor :'#13394A'
  }, 
  button_style:{
    height : 60,
    width   :'86%',
    borderRadius :5,
    backgroundColor:'#00C458',
    alignItems:'center',
    marginTop:20,
    justifyContent :'center'
  }, 
  button_text:{
    color:'white',
    fontFamily:'Gilroy-SemiBold',
    fontSize:14
  } })