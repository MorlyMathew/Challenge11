import React ,{Component} from "react";
import { View,Text,StyleSheet,Image } from "react-native";

export default class TabContent extends Component{
    render(){
        return(

            <View style = {styles.container}>
            
             <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
             <Image
              source={require('./imgs/home_inactive.png')}
              style={{height:20,width:20}}></Image>
             <Text style = {{fontSize:14,color:'gray',height:25,textAlignVertical:'center',marginLeft:2}}
             onPress={() => this.props.navigation.navigate('Home')}>Home</Text>
             </View>

             <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
             <Image
              source={require('./imgs/recent.png')}
              style={{height:20,width:20}}></Image>
             <Text style = {{fontSize:14,color:'gray',height:25,textAlignVertical:'center',marginLeft:2}}>Recent</Text>
             </View>

             <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
             <Image
              source={require('./imgs/examsicon.png')}
              style={{height:20,width:20}}></Image>
             <Text style = {{fontSize:14,color:'gray',height:25,textAlignVertical:'center',marginLeft:2}}>Exams</Text>
             </View>

             <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
             <Image
              source={require('./imgs/icon_profile.png')}
              style={{height:20,width:20}}></Image>
             <Text style = {{fontSize:14,color:'gray',height:25,textAlignVertical:'center',marginLeft:2}}
             onPress={() => this.props.navigation.navigate('Profile')}>Profile</Text>
             </View>

             <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
             <Image
              source={require('./imgs/contact.png')}
              style={{height:20,width:20}}></Image>
             <Text style = {{fontSize:14,color:'gray',height:25,textAlignVertical:'center',marginLeft:2}}>Contact</Text>
             </View>
              
               
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        container :{
           
            backgroundColor : 'white',
            flexDirection:'row',
            marginLeft:10,
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
            marginRight:10,
            height:80,
            justifyContent: "space-between",
            padding:10
        },
        menu :{
            fontSize :15,
            fontWeight :'500',
            textAlignVertical:'center',
            textAlign:'center',
            color : 'black',
            
        },
       
        profileimage :{
            height :'100%',
            width : '100%'
            
        }
    }
)