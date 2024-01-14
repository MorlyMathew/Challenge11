import React ,{Component} from "react";
import { View,StyleSheet,TextInput,ImageBackground,Image,TouchableHighlight,Text } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
export default class RegisterPage extends Component{
    
  render(){
    const data = [
      { label: 'Item 1', value: '1' },
      { label: 'Item 2', value: '2' },
      { label: 'Item 3', value: '3' },
      { label: 'Item 4', value: '4' },
      { label: 'Item 5', value: '5' },
    ];
        return(
    
          <View style={styles.container}>
    
          <View style = {{height:'45%',width :"100%",alignItems:'center'}}>
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
           <Text style = {{fontSize:20,fontFamily:'Gilroy-SemiBold',color:'#202A44',marginTop:20,marginBottom:20}}>
           Student details
           </Text>
          <View style={{backgroundColor:'#202A44',height:"50%",width:"100%",marginTop:25,justifyContent:'center',alignItems:'center',
          borderTopEndRadius:20,borderTopLeftRadius:20 }}>
    
         <TextInput style={styles.textinputstyle}
        placeholder="Full name"
        placeholderTextColor={'#446270'}
        ></TextInput>

         <TextInput style={styles.textinputstyle}
        placeholder="Email"
        placeholderTextColor={'#446270'}
        ></TextInput>

<Dropdown
        style={styles.textinputstyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select State"
        placeholderStyle={{color:'#446270'}}
        searchPlaceholder="Search..."      
      />


       <TextInput style={styles.textinputstyle}
        placeholder="Pin code"
        placeholderTextColor={'#446270'}
        ></TextInput>

  <TouchableHighlight 
       onPress={ ()=> this.props.navigation.navigate('SchoolBoard') }
        style ={styles.button_style}>

         <Text style ={styles.button_text}>Register</Text>
           </TouchableHighlight>
        
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
        height: 60,
        width :'83%',
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
        width   :'83%',
        marginLeft:5,
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