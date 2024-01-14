// ProfileScreen.js
import React from 'react';
import { View, StyleSheet, FlatList, ImageBackground,Text,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class SubjectDetails extends React.Component {
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
   
        <View style={{marginTop:10,backgroundColor:'white',height:115,flexDirection:'column',paddingLeft:20,paddingRight:20,borderRadius:6}}>
      
        <Text style={{fontFamily:'Gilroy-SemiBold',marginLeft:5,marginRight:5,fontSize:17,fontWeight:'800',marginTop:20,color:'#002333'}}
             onPress={() => this.props.navigation.navigate('Subjectvideo')}>{title}</Text>
       <View style={{flexDirection:'row',marginTop:15,padding:5}}>

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

       <Image
              source={require('./imgs/drawable-hdpi/Menu.png')}
              style={{height:30,width:30,margin:20}}></Image>
        <Text style={{color:'white',marginLeft:20,fontSize:20,fontWeight:'500',marginTop:20}}>Biology</Text>
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

export default SubjectDetails;

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