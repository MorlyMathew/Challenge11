// ProfileScreen.js
import React from 'react';
import { View, StyleSheet, FlatList, ImageBackground,Text,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class Subjectvideo extends React.Component {
  render() {
    const DATA = [


        {
          id:"1",
          title:"xbchxbcx nzhxgcv hzxg cvzhjb cjzhbjzhbc",
          chapter :"chapter 1",
          parts: "parts 3"
        },
        {
          id:"2",
          title:"snbhdxb chxbc zmxn sdzxczxczx zmx zm njbhjbvjh",
          chapter :"chapter 5",
          parts: "parts 2"
        },
        {
          id:"3",
          title:"cn cbnxxhjbxjhcbzkxjx,zx ++",
          chapter :"chapter 1",
          parts: "parts 3"
        },
        {
          id:"4",
          title:"Java",
          chapter :"chapter 1",
          parts: "parts 3"
        },
        {
          id:"5",
          title:"Python",
          chapter :"chapter 1",
          parts: "parts 3"
        },
        {
          id:"5",
          title:"Python",
          chapter :"chapter 1",
          parts: "parts 3"
        }, 
      ];
   
    const Item = ({title}) => {
        return( 
   
        <View style={{marginTop:10,backgroundColor:'white',height:250,flexDirection:'column',borderRadius:6}}>
      <Image
              source={require('./imgs/Menu.png')}
              style={{height:150,width:'100%'}}></Image>
        <Text style={{fontFamily:'Gilroy-SemiBold',marginLeft:10,marginRight:10,marginRight:5,fontSize:17,fontWeight:'800',marginTop:15,color:'#002333'}}
             onPress={() => this.props.navigation.navigate('SubjectDetails')}>{title}</Text>
       <View style={{flexDirection:'row',marginTop:8,padding:5,marginLeft:10}}>

       <View style={{borderRadius:10,height:12,width:12,borderWidth:1,borderColor:'gray'}}>
         <Text style={{backgroundColor:'gray',margin:3,borderRadius:3}}></Text> 
        </View>
       <Text style={{color:'gray',fontSize:10,fontWeight:'500',marginLeft:5}}>12 chapter</Text>
       <View style={{borderRadius:10,marginLeft:20,height:12,width:12,borderWidth:1,borderColor:'gray'}}>
         <Text style={{backgroundColor:'gray',margin:3,borderRadius:3}}></Text> 
        </View>
       <Text style={{color:'gray',marginLeft:5,fontSize:10,fontWeight:'500'}}>124 hr</Text>


</View>

</View>
        );
      }
    const { navigation } = this.props;
    const renderItem = ({item})=>( 
        <Item title={item.title}/>
      );
    return (
      <View style={{ flex: 1}}>
      <ImageBackground 
        style = {styles.backgroundImage}
       source={require("../src/imgs/background.png")}>
      <View style={{flexDirection:'row'}}>
       <Image
              source={require('./imgs/drawable-hdpi/Menu.png')}
              style={{height:30,width:30,marginTop:20,marginLeft:20}}></Image>
        <Text style={{color:'lightgray',fontSize:20,fontWeight:'500',flex:1,textAlign:'center',marginTop:20}}>Biology</Text>
        </View>
        <Text style={{color:'white',fontSize:25,fontWeight:'500',marginLeft:20,marginTop:40}}>Long chapcter name can be shown here</Text>
        
       <View style={{flexDirection:'row',marginTop:5}}>
        <View style={{borderRadius:10,marginLeft:20,height:12,width:12,borderWidth:1,borderColor:'green'}}>
         <Text style={{backgroundColor:'green',margin:3,borderRadius:3}}></Text> 
        </View>
        <Text style={{color:'green',marginLeft:5,fontSize:10,fontWeight:'500'}}>12 chapter</Text>
        <View style={{borderRadius:10,marginLeft:20,height:12,width:12,borderWidth:1,borderColor:'green'}}>
         <Text style={{backgroundColor:'green',margin:3,borderRadius:3}}></Text> 
        </View>
        <Text style={{color:'green',marginLeft:5,fontSize:10,fontWeight:'500'}}>124 hr</Text>
       </View>
       <View style={{flexDirection:'row',marginTop:35,marginLeft:20,marginRight:20,justifyContent:'space-between'}}>
        <Text style={{color:'white'}}>Videos</Text>
        <Text style={{color:'white'}}>Chapter Test</Text>
        <Text style={{color:'white'}}>Resources</Text>
        <Text style={{color:'white'}}>QN Bank</Text>  
         </View>

        <View style={{borderRadius:10,marginTop:20,marginBottom:20,padding:10,height:700}}>
       <FlatList 
             
              style={{marginLeft:20,marginRight:20,flexGrow:0}}
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}/>
        </View> 
       
       </ImageBackground>
        
      </View>
    );
  }
}

export default Subjectvideo;

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
        height:250,
        flex:1,
        backgroundColor:'light-gray'
         
           // or 'stretch' or 'contain'
        },
      profileimage :{
          height :'100%',
          width : '100%'
          
      }
  }
)