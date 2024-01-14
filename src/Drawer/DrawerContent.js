import React ,{Component} from "react";
import { View,Text,StyleSheet,Image } from "react-native";

export default class DrawerContent extends Component{
    render(){
        return(

            <View style = {styles.container}>
                <View style = {{height : "30%" , backgroundColor : 'red',flexDirection:'column',  alignItems :'center',
            justifyContent:'center'}}>

                <View style = {styles.profilepic}>
                    {/* <Image 
                    style = {styles.profileimage}
                    source= {require('../../assest/logo.png')}></Image> */}
                </View>
                <Text >namee</Text>
                
                <Text >phone number</Text>

                </View>
                <Text style = {styles.menu}
                onPress={() => this.props.navigation.navigate('Home')}>Home page</Text>
                <Text style = {styles.menu}
                 onPress={() => this.props.navigation.navigate('Profile')}>Profile page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        container :{
            flex : 1,
            backgroundColor : 'grey'
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
            
        },
        profileimage :{
            height :'100%',
            width : '100%'
            
        }
    }
)