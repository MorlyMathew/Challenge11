import React ,{Component} from "react";
import { View,StyleSheet,TextInput,ImageBackground,Image,TouchableHighlight,Text } from "react-native";

export default class HomePage extends Component{
    render(){
        return(
    
          <View style={styles.container}>
    
          <View style = {{height:'55%',width :"100%",alignItems:'center'}}>
           <Image
           source={require('./imgs/inamkes_logo.png')}
           style={styles.image_style}
           ></Image> 

          <View style = {{height: 135, width :135,backgroundColor:'#F9F9F9',borderRadius:70}}>
           <Image
           source={require('./imgs/otp_profile.png')}
           style={styles.image_style_otp}
           ></Image> 
           </View>
           </View>
           <Text style = {{fontSize:20,fontFamily:'Gilroy-ExtraBold',color:'#202A44'}}>
           Verification Code
           </Text>
           <Text style = {{fontSize:14,color:'#808080',fontFamily:'Gilroy-Regular'}}>
            Please type Verification code sent to 
           </Text>
    
           <Text style = {{fontSize:15,color:'#002333',marginTop:25,fontFamily:'Gilroy-Medium'}}>
           +91 987654321 
           </Text>
          <View style={{backgroundColor:'#202A44',height:"36%",width:"100%",marginTop:25,justifyContent:'center',alignItems:'center',
          borderTopEndRadius:20,borderTopLeftRadius:20 }}>
    
           <View style={{flexDirection:'row',width:'95%',height:'30%',marginTop:10}}>
           <TextInput style={styles.textinput_style}></TextInput>
           <TextInput style={styles.textinput_style}></TextInput>
           <TextInput style={styles.textinput_style}></TextInput>
           <TextInput style={styles.textinput_style}></TextInput>
           <TextInput style={styles.textinput_style}></TextInput>
           <TextInput style={styles.textinput_style}></TextInput>
           </View>

          <TouchableHighlight 
           onPress={ ()=> this.props.navigation.navigate('RegisterPage') }
           style ={styles.button_style}>
            <Text style ={styles.button_text}>Resend OTP</Text>
           </TouchableHighlight>
          <Text style={{color :"#446270",marginTop:10,fontSize:10,fontFamily:'Gilroy-Regular'}}>Resend after 28s</Text> 

          <View style={{flexDirection:'row',width:'95%',height:'20%',alignItems:'center',justifyContent:'center'}}>
          <Image
           source={require('./imgs/call.png')}
           style={{height:15,width:15}}
           ></Image> 
           <Text style={{color:"#00C458",marginLeft:10,fontSize:14,fontFamily:'Gilroy-SemiBold'}}>Contact Us</Text>
          
           </View>
           </View>
    
           {/* </ImageBackground> */}
          </View>
        ) }}
    const styles = StyleSheet.create({
    container :{
        height : '100%',
        width : '100%' ,
        alignItems :"center",
        justifyContent:"center",
        backgroundColor :'#ffffff'   
      }, 
      img_container :{
        height : '100%',
        width : '100%',
        alignItems :"center",
        justifyContent:"center"   
      }, 
      image_style:{
        height: 200,
        width :200
      }, 
      image_style_otp:{
        height: 140,
        width :140,
        
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
        height: 45,
        width :45,
        marginLeft:5,
        borderRadius :5,
        color:'#ffffff',
        fontSize:14,
        fontFamily:'Gilroy-Regular',
        backgroundColor :'#27445C'
      }, 
      button_style:{
        height : 60,
        width   :'90%',
        borderRadius :5,
        backgroundColor:'#00C458',
        alignItems:'center',
        justifyContent :'center'
      }, 
      button_text:{
        color:'white',
        fontFamily:'Gilroy-ExtraBold',
        fontSize:14
      } })