import React,{Component} from "react";
import { View,StyleSheet,TextInput,ImageBackground,Image,TouchableHighlight,Text } from "react-native";
export default class Recent  extends Component{
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

      
      </View>
    ) }}
const styles = StyleSheet.create({
container :{
    height : '100%',
    width : '100%' ,
    alignItems :"center",
    justifyContent:"center",
    backgroundColor :'#ffffff'   
  }
})