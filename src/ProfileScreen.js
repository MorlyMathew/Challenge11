// ProfileScreen.js
import React from 'react';
import { View, StyleSheet, Button, ImageBackground,Text,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class ProfileScreen extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
      <ImageBackground 
        style = {styles.backgroundImage}
       source={require("../src/imgs/background.png")}>

       <View style={{flexDirection:'row',marginTop:40}}>
        <Text style={{color:'white',flex:1,textAlign:'center',fontSize:20,fontWeight:'500'}}>Profile</Text>
        <Image
              source={require('./imgs/drawable-ldpi/Group 52.png')}
              style={{height:25,width:25}}></Image>
               <Image
              source={require('./imgs/Menu.png')}
              style={{height:25,width:25,marginLeft:10,marginRight:20}}></Image>


       </View>
       <ScrollView style={{flex:1}} >
      <View style={{backgroundColor:'white',borderRadius:10,marginTop:40,marginLeft:20,marginRight:20,marginBottom:20,padding:10,height:520}}>
        {/* <ScrollView > */}
      <View style = {{flexDirection:'row',justifyContent:'center',alignContent:'center',marginTop:30,marginBottom:20}}>
          <Image
           source={require('../src/imgs/Menu.png')}
           style={{height:60,width:60,marginLeft:20,borderColor:'green',borderWidth:1,borderRadius:30}}
           ></Image> 
            <View style = {{flexDirection:'column',justifyContent:'center',alignContent:'center',flex:1}}>
           <Text style={{color:'black',marginLeft:10,marginRight:10,fontSize:10,fontWeight:'500'}}> jhbhgvgcgfc</Text>
           <Text style={{color:'black',marginLeft:10,marginRight:10,fontSize:10}}> jhbhgvgcgfc</Text>
           </View>
         
         
          </View>
              <Text style = {{color:'black',marginLeft:20,fontWeight:'500',marginTop:8,marginBottom:8}}>Personal Info</Text>
              
               <View style ={{height:1,backgroundColor:'lightgrey',marginTop:8,marginBottom:12}}></View>
              
               <View style={{flexDirection:'row'}} >
                <Text style = {{color:'gray',marginLeft:20,fontSize:12}}>Account Settings</Text>
                 <Text style = {{color:'black',fontWeight:'500',marginLeft:20,fontSize:12}}>hjghvhvghvghgv Settings</Text>
              </View>
                <View style ={{height:1,backgroundColor:'lightgrey',fontSize:12,marginLeft:20,marginRight:20,marginTop:12,marginBottom:12}}></View>

                <View style={{flexDirection:'row'}} >
                <Text style = {{color:'gray',fontSize:12,marginLeft:20}}>Email</Text>
                 <Text style = {{color:'black',fontSize:12,fontWeight:'500',marginLeft:20}}>hjghvhvghvghgvSettings</Text>
              </View>

              <View style ={{height:1,backgroundColor:'lightgrey',marginLeft:20,marginRight:20,marginTop:12,marginBottom:12}}></View>

              <View style={{flexDirection:'row'}} >
              <Text style = {{color:'gray',fontSize:12,marginLeft:20}}>Number</Text>
              <Text style = {{color:'black',fontSize:12,fontWeight:'500',marginLeft:20}}>56145612532</Text>
               </View>
               <View style ={{height:1,backgroundColor:'lightgrey',marginLeft:20,marginRight:20,marginTop:12,marginBottom:12}}></View>
               <Text style = {{color:'black',marginLeft:20,fontWeight:'500',marginTop:8,marginBottom:8}}>Course Info</Text>
               <View style ={{height:1,backgroundColor:'lightgrey',marginTop:8,marginBottom:12}}></View>

               <View style={{flexDirection:'row'}} >
              <Text style = {{color:'gray',fontSize:12,marginLeft:20}}>Center</Text>
              <Text style = {{color:'black',fontSize:12,fontWeight:'500',marginLeft:20}}>vvcvcfcdc</Text>
               </View>
               <View style ={{height:1,backgroundColor:'lightgrey',marginLeft:20,marginRight:20,marginTop:12,marginBottom:12}}></View>

               <View style={{flexDirection:'row'}} >
              <Text style = {{color:'gray',fontSize:12,marginLeft:20}}>Course</Text>
              <Text style = {{color:'black',fontSize:12,fontWeight:'500',marginLeft:20}}>hhhhhh</Text>
               </View>
               <View style ={{height:1,backgroundColor:'lightgrey',marginLeft:20,marginRight:20,marginTop:12,marginBottom:12}}></View>

               <View style={{flexDirection:'row'}} >
              <Text style = {{color:'gray',fontSize:12,marginLeft:20}}>Payment Status</Text>
              <Text style = {{color:'black',fontSize:12,fontWeight:'500',marginLeft:20}}>Free</Text>
               </View>
               <View style ={{height:1,backgroundColor:'lightgrey',marginLeft:20,marginRight:20,marginTop:12,marginBottom:12}}></View>
              
               <View style={{flexDirection:'row'}} >
              <Text style = {{color:'gray',fontSize:12,marginLeft:20}}>Expired Date</Text>
              <Text style = {{color:'black',fontSize:12,fontWeight:'500',marginLeft:20}}>12/12/2024</Text>
               </View>
             
         
      </View>
      <View style = {{borderRadius:10,padding:25,flexDirection:'row',justifyContent:'center',alignContent:'center',marginLeft:20,marginRight:20,backgroundColor:'#00C458'}}>
          <Image
           source={require('../src/imgs/Group38.png')}
           style={{height:20,width:20,marginLeft:20}}
           ></Image> 
            
           <Text style={{color:'white',marginLeft:10,marginRight:10,fontSize:14,flex:1}}> Custom Payment</Text>
         
           <View style = {{justifyContent:'center',alignContent:'center'}}>
           <Image
           source={require('../src/imgs/arrow.png')}
           style={{height:10,width:10,marginRight:20}}
           ></Image> 
           </View>
          </View>
          <View style = {{borderRadius:10,padding:25,flexDirection:'row',justifyContent:'center',alignContent:'center',marginLeft:20,marginRight:20,marginTop:10,backgroundColor:'#00C458'}}>
          <Image
           source={require('../src/imgs/Group38.png')}
           style={{height:20,width:20,marginLeft:20}}
           ></Image> 
            
           <Text style={{color:'white',marginLeft:10,marginRight:10,fontSize:14,flex:1}}> Custom Payment</Text>
         
           <View style = {{justifyContent:'center',alignContent:'center'}}>
           <Image
           source={require('../src/imgs/arrow.png')}
           style={{height:10,width:10,marginRight:20}}
           ></Image> 
           </View>
          </View>
      </ScrollView>
       </ImageBackground>
        
      </View>
    );
  }
}

export default ProfileScreen;

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
        width:'100%',
        height:200,
        flex:1
         
           // or 'stretch' or 'contain'
        },
      profileimage :{
          height :'100%',
          width : '100%'
          
      }
  }
)