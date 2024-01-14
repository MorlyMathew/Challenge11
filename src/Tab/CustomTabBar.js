import React ,{Component} from "react";
import { View,Text,StyleSheet,Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();


export default class CustomTabBar extends Component{
    render(){
        return(

   <View style = {styles.container}>
     <View style = {{ backgroundColor : '#ffffff',flexDirection:'row'}}>

         <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <Image
       source={require('../imgs/home.png')}
       style={{height:18,width:16}}
       ></Image>
        <Text style={{marginLeft:4,fontSize:8,fontFamily:'Gilroy-SemiBold'}} 
         onPress = {() => this.props.navigation.navigate('InmakesHome')}>Home</Text>
      </View>  

      <View style={{flexDirection:'row',marginLeft:18,justifyContent:'center',alignItems:'center'}}>
        <Image
       source={require('../imgs/recent.png')}
       style={{height:18,width:16}}
       ></Image>
        <Text style={{marginLeft:4,fontSize:8,fontFamily:'Gilroy-SemiBold'}} >Recent</Text>
      </View> 

      <View style={{flexDirection:'row',marginLeft:18,justifyContent:'center',alignItems:'center'}}>
        <Image
       source={require('../imgs/examsicon.png')}
       style={{height:18,width:16}}
       ></Image>
        <Text style={{marginLeft:4,fontSize:8,fontFamily:'Gilroy-SemiBold'}} >Exams</Text>
      </View>  

      <View style={{flexDirection:'row',marginLeft:18,justifyContent:'center',alignItems:'center'}}>
        <Image
       source={require('../imgs/icon_profile.png')}
       ></Image>
        <Text style={{marginLeft:4,fontSize:8,fontFamily:'Gilroy-SemiBold' }}
     onPress = {() => this.props.navigation.navigate('Profile')}>Profile</Text>
      </View> 

      <View style={{flexDirection:'row',marginLeft:18,justifyContent:'center',alignItems:'center'}}>
        <Image
       source={require('../imgs/contact.png')}
       style={{height:18,width:16}}
       ></Image>
        <Text style={{marginLeft:4,fontSize:8,fontFamily:'Gilroy-SemiBold'}} >Contacts</Text>
      </View>

     </View>
      </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        container :{
            height : 75 ,
            backgroundColor : '#ffffff',
           
            borderRadius:10,justifyContent:'center',
            alignItems:'center'
        },
        menu :{
            fontSize :18,
            fontWeight :'bold',
            marginTop :10,
            color : '#ffffff'
        },
        profilepic :{
           
            marginTop :10,
            backgroundColor : '#ffffff',
            height :50,
            width : 50,
          
            borderRadius: 25
            
        }
     
    }
)