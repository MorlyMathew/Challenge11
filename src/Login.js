import React,{Component} from "react";
import { View,StyleSheet,TextInput,KeyboardAvoidingView,Image,TouchableHighlight,Text } from "react-native";
export default class Login  extends Component{
  constructor(){
    super();
    this.state = {
      name : null
    }

  }
  updateValue(username){
    this.setState({
      name : username
    })

  }
  render(){
    return(

      <View style={styles.container}>

      <View style = {{height:'70%',width :"100%",justifyContent:'center',alignItems:'center'}}>
       <Image
       source={require('./imgs/inamkes_logo.png')}
       style={styles.image_style}
       ></Image> 
       </View>
       <Text style = {{fontSize:20,fontFamily:'Gilroy-SemiBold',color:'#002333'}}>
        Enter your mobile number
       </Text>
       <Text style = {{fontSize:14,color:'#9F9F9F',fontFamily:'Gilroy-Regular'}}>
        we will send you an OTP to verify
       </Text>

       <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{width:"100%",flex:1}}
      >
      <View style={{backgroundColor:'#062E40',height:"100%",width:"100%",justifyContent:'center',alignItems:'center',
      borderTopEndRadius:20,borderTopLeftRadius:20}}>

       <View style={{flexDirection:'row',width:'85%',height:'20%',marginLeft:20,marginRight:20,marginBottom:10}}>
       <Text style={styles.textinput_style}>+91</Text>
        <TextInput style={styles.textinputstyle}
        placeholder="Mobile Number"
        placeholderTextColor={'#446270'}
        ></TextInput>
        </View>
      <TouchableHighlight 
       onPress={ ()=> this.props.navigation.navigate('HomePage',{username: this.state.name}) }
       style ={styles.button_style}>
        <Text style ={styles.button_text}>Contiune</Text>
       </TouchableHighlight>
       </View>
       </KeyboardAvoidingView>
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
    width :300
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
    marginTop:10,
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