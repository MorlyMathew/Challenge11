import React ,{Component} from "react";
import { View,Image,StyleSheet,ImageBackground,Text,TouchableHighlight } from "react-native";

export default class DrawerContent extends Component{
    render(){
        return(

            <View style = {styles.container}>
                <ImageBackground 
                style = {styles.backgroundImage}
                source={require("../src/imgs/background.png")}>

           <TouchableHighlight
            style={{height:30,width:30,marginLeft:25,marginTop:50}}
             onPress={ ()=>  this.props.navigation.toggleDrawer() }>
           <Image
           source={require('../src/imgs/drawable-hdpi/Menu.png')}
           style={{height:30,width:30}}
         
           ></Image> 
         </TouchableHighlight>
          <View style = {{flexDirection:'row',justifyContent:'center',alignContent:'center',marginTop:30,marginBottom:20}}>
          <Image
           source={require('../src/imgs/Menu.png')}
           style={{height:60,width:60,marginLeft:20,borderColor:'green',borderWidth:1,borderRadius:30}}
           ></Image> 
            <View style = {{flexDirection:'column',justifyContent:'center',alignContent:'center',flex:1}}>
           <Text style={{color:'white',marginLeft:10,marginRight:10,fontSize:10}}> jhbhgvgcgfc</Text>
           <Text style={{color:'white',marginLeft:10,marginRight:10,fontSize:10}}> jhbhgvgcgfc</Text>
           </View>
           <View style = {{justifyContent:'center',alignContent:'center'}}>
           <Image
           source={require('../src/imgs/drawable-hdpi/Group50.png')}
           style={{height:10,width:10,marginRight:20}}
           ></Image> 
           </View>
          </View>

                <View style={{flexDirection:'row',marginLeft:20}}>
                <View style={{height:25,width:25,borderColor:'green',borderRadius:5,borderWidth:1}}></View>
                <Text style = {styles.menu}>Exam Corner</Text>
                </View>
                <View style ={{height:2,backgroundColor:'#243C47',marginLeft:20,marginRight:20,marginTop:12,marginBottom:12}}></View>

                <View style={{flexDirection:'row',marginLeft:20}}>
                <View style={{height:25,width:25,borderColor:'green',borderRadius:5,borderWidth:1}}></View>
                <Text style = {styles.menu}>Subscriptions</Text>
                </View>
                <View style ={{height:2,backgroundColor:'#243C47',marginLeft:20,marginRight:20,marginTop:12,marginBottom:12}}></View>

                <View style={{flexDirection:'row',marginLeft:20}}>
                <View style={{height:25,width:25,borderColor:'green',borderRadius:5,borderWidth:1}}></View>
                <Text style = {styles.menu}>Analytics</Text>
                </View>
                <View style ={{height:2,backgroundColor:'#243C47',marginLeft:20,marginRight:20,marginTop:12,marginBottom:12}}></View>

                <View style={{flexDirection:'row',marginLeft:20}}>
                <View style={{height:25,width:25,borderColor:'green',borderRadius:5,borderWidth:1}}></View>
                <Text style = {styles.menu}>Downloads</Text>
                </View>
                <View style ={{height:2,backgroundColor:'#243C47',marginLeft:20,marginRight:20,marginTop:12,marginBottom:12}}></View>

                <View style={{flexDirection:'row',marginLeft:20}}>
                <View style={{height:25,width:25,borderColor:'green',borderRadius:5,borderWidth:1}}></View>
                <Text style = {styles.menu}>Notifications</Text>  
                </View>
                <View style ={{height:2,backgroundColor:'#243C47',marginLeft:20,marginRight:20,marginTop:12,marginBottom:12}}></View>

                <View style={{flexDirection:'row',marginLeft:20}}>
                <View style={{height:25,width:25,borderColor:'green',borderRadius:5,borderWidth:1}}></View>
                <Text style = {styles.menu}>Referrals</Text>   
                </View>
                <View style ={{height:2,backgroundColor:'#243C47',marginLeft:20,marginRight:20,marginTop:12,marginBottom:12}}></View>

                <View style={{flexDirection:'row',marginLeft:20}}>
                <View style={{height:25,width:25,borderColor:'green',borderRadius:5,borderWidth:1}}></View>
                <Text style = {styles.menu}>Share App</Text>  
                </View>
                <View style ={{height:2,backgroundColor:'#243C47',marginLeft:20,marginRight:20,marginTop:12,marginBottom:12}}></View>

                <View style={{flexDirection:'row',marginLeft:20}}>
                <View style={{height:25,width:25,borderColor:'green',borderRadius:5,borderWidth:1}}></View>
                <Text style = {{  fontSize :15,fontFamily:'Gilroy-Regular',marginLeft:10,marginRight:20,color : 'red'}}>Logout</Text>
             </View>
                <Text style = {{width:'80%',height:50, marginBottom:30, justifyContent: 'center',alignItems: 'center',textAlignVertical:'center',marginLeft:20,marginRight:20,
                position: 'absolute',textAlign:'center',  color:'green',borderColor:'green',borderWidth:1,borderRadius:8, fontSize :15, fontWeight :'500', bottom: 0}}>Enquire Now</Text>
               </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        container :{
            flex : 1,
            backgroundColor : 'white'
        },
        menu :{
            fontSize :15,
            fontFamily:'Gilroy-Regular',
            marginLeft:10,
            marginRight:20,
            color : 'white'
        },
        profilepic :{
            margin:10,
            backgroundColor : '#ffffff',
            height :100,
            width : 100,
            borderRadius: 25,
            flexDirection:'column'
            
        },
        backgroundImage: {
            flex: 1,
            resizeMode: 'stretch',
           
             // or 'stretch' or 'contain'
          },
        profileimage :{
            height :'100%',
            width : '100%'
            
        }
    }
)