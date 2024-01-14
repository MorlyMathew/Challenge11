import React ,{Component} from "react";

import { View,StyleSheet,TextInput,ImageBackground,Image,TouchableHighlight,Text } from "react-native";
export default class AppTour extends Component{
    render(){
 
        return(
    
          <View style={styles.container}>
    
          <View style = {{justifyContent:'center',alignItems:'center',height:'65%',width :"93%",backgroundColor:'#F3F3F3',borderRadius:10,marginRight:15,marginLeft:15 ,marginTop:15}}>
           {/* <Image
           source={require('./imgs/inamkes_logo.png')}
           style={styles.image_style}
           ></Image>  */}
          <Text style = {{fontSize:12,fontFamily:'Gilroy-SemiBold',color:'#002333',marginBottom:6}}>
          Images/Illustrations
           </Text>
           </View>
           <View style={{justifyContent:'center',alignItems:'center',width:'100%',height:'30%',marginTop:25}}>
           <Text style = {{fontSize:20,fontFamily:'Gilroy-SemiBold',color:'#002333',marginBottom:6}}>
           App tour title 
           </Text>
           <Text style = {{fontSize:14,fontFamily:'Gilroy-Regular',color:'#002333'}}>
           The app tour description goes here.
           </Text>
           <TouchableHighlight 
           style={{borderRadius:6,backgroundColor:'#E5E5E5',height:72,width:72,justifyContent:'center',alignItems:'center',marginTop:50}}
          onPress={ ()=> this.props.navigation.navigate('Drawer')  }
          // onPress={ ()=> this.props.navigation.navigate('Navigation') }
          > 
           <View style={{borderRadius:6,backgroundColor:'#00C458',height:58,width:58,justifyContent:'center',alignItems:'center'}}>
           <Image
           source={require('./imgs/arrow.png')}
           style={styles.image_style}
           ></Image>
           </View>
           </TouchableHighlight> 
           </View>
      

{/*      
     <TouchableHighlight 
       onPress={ ()=> this.props.navigation.navigate('AppTour') }
        style ={styles.button_style}>
         <Text style ={styles.button_text}>Continue</Text>
           </TouchableHighlight> */}
        
         
    
           {/* </ImageBackground> */}
          </View>
        ) }}
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
        height: 18,
        width :18,
        
      }, 
      image_style_otp:{
        height: 140,
        width :140 
      }, 
      textinput_style:{
        height: 55,
        width :'15%',
        color:'#ffffff',
        borderRadius :5,
        marginLeft:6,
        textAlign:'center',
        fontSize:14,
        fontFamily:'Gilroy-Regular',
        textAlignVertical:'center',
        backgroundColor :'#27445C'
      }, 
      textinputstyle:{
        height: 60,
        width :'85%',
        marginLeft:10,
        borderRadius :5,
        color:'#ffffff',
        marginTop:10,
        fontSize:14,
        fontFamily:'Gilroy-Regular',
        backgroundColor :'#27445C'
      }, 
      button_style:{
        height : 60,
        width   :'85%',
        borderRadius :5,
        backgroundColor:'#00C458',
        alignItems:'center',
        marginTop:20,
        justifyContent :'center'
      }, 
      button_text:{
        color:'white',
        fontFamily:'Gilroy-ExtraBold',
        fontSize:14
      } })