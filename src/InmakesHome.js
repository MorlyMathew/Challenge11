// import React,{Component} from "react";
// import {ScrollView, View,StyleSheet,TextInput,SafeAreaView,ImageBackground,Image,TouchableHighlight,Text,FlatList, Button } from "react-native";
// // import { ScrollView } from "react-native-gesture-handler";
// import DrawerScreenWrapper from "./Drawer/DrawerScreenWrapper";
// export default class InmakesHome  extends Component{
//   constructor(){
//     super();
//     this.state = {
//       name : null
//     }

//   }
//   updateValue(username){
//     this.setState({
//       name : username
//     })

//   }
  
//   render(){
//     const DATA = [


//   {
//     id:"1",
//     title:"Biology"
//   },
//   {
//     id:"2",
//     title:"STL"
//   },
//   {
//     id:"3",
//     title:"C++"
//   },
//   {
//     id:"4",
//     title:"Java"
//   },
//   {
//     id:"5",
//     title:"Python"
//   },
//   {
//     id:"6",
//     title:"CP"
//   },
//   {
//     id:"7",
//     title:"ReactJs"
//   },
//   {
//     id:"8",
//     title:"NodeJs"
//   },
//   {
//     id:"9",
//     title:"MongoDb"
//   },
//   {
//     id:"10",
//     title:"ExpressJs"
//   },
//   {
//     id:"11",
//     title:"PHP"
//   },
//   {
//     id:"12",
//     title:"MySql"
//   },
// ];

// const VideoData = [
//   {
//     id:"1",
//     title:"Course Title"
//   },
//   {
//     id:"2",
//     title:"Course Title"
//   },
//   {
//     id:"3",
//     title:"Course Title"
//   },
//   {
//     id:"4",
//     title:"Course Title"
//   }

// ];

// const class_category = [
//   {
//     id:"1",
//     title:"Course Title",
//     sub_title :"nmkolphhfxdfswauhbvbgfcgjhkjklolkjhgfjjk"
//   },
//   {
//     id:"2",
//     title:"Course Title",
//     sub_title :"nmkolphhjjk"
//   },
//   {
//     id:"3",
//     title:"Course Title",
//     sub_title :"nmkhgygyffdfdfseaekjkhbhgcgijpkolphhjjk"
//   },
//   {
//     id:"4",
//     title:"Course Title",
//     sub_title :"nmkolphhhhhfrdgdryhfuygiuhukhukhjjk"
//   }

// ];
//  const Item = ({title}) => {
//   return( 
//     // <View >
//     //   <Text>{title}</Text>
//     // </View>

//      <View style={{width:100,marginRight:10,height:40,flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:6,borderColor:'#000000',borderWidth:1}}>

//        <Text style={{backgroundColor:'#00C458',borderRadius:25,height:23,width:23}}></Text>
//         <Text style={{fontFamily:'Gilroy-SemiBold',marginLeft:5,fontSize:12,color:'#000000'}}>{title}</Text>

//        </View>
//   );
// }

// const ItemVideo = ({title}) => {
//   return( 
    
//      <View>

//       <ImageBackground  
//       style={{width:200,marginRight:10,height:120,flexDirection:'row',alignItems:'flex-end',borderRadius:6,borderColor:'#000000',borderWidth:1}}
//       imageStyle={{ borderRadius: 6}}
//       source={require('./imgs/background.png')}>
//        <Image source={require('./imgs/play.png')}
//        style={{height:30,width:30,margin:10}}></Image>
//         <Text style={{fontFamily:'Gilroy-SemiBold',fontSize:12,margin:5,height:25,color:'#ffffff'}}>{title}</Text>
//         </ImageBackground>
//        </View>
//   );
// }

// const Itemclasscategory = ({title,sub_title}) => {
//   return( 
    
//      <View>

//       <ImageBackground  
//       style={{flexDirection:'column',width:260,marginRight:15,height:350,alignItems:'flex-start',borderRadius:6,borderColor:'#000000',borderWidth:1}}
//       imageStyle={{ borderRadius: 6}}
//       source={require('./imgs/background.png')}>
//        <Image source={require('./imgs/play.png')}
//        style={{height:80,borderRadius:40,width:80,marginTop:10,marginLeft:25,backgroundColor:'#ffffff'}}></Image>
//         <Text style={{fontFamily:'Gilroy-SemiBold',fontSize:18,marginTop:10,marginLeft:25,color:'#FFFFFF'}}>{title}</Text>
//         <Text style={{fontFamily:'Gilroy-Regular',fontSize:14,marginTop:10,marginLeft:25,marginRight:5,color:'#446270',flex:1}}>{sub_title}</Text>
        
//       <TouchableHighlight 
      
//         style ={{marginBottom:10,marginLeft:25,marginRight:5,height : 45,
//           width   :'65%',
//           borderRadius :5,
//           backgroundColor:'#00C458',
//           alignItems:'center',
//           marginTop:10,
//           justifyContent :'center'}}>

//          <Text style ={styles.button_text}>Register</Text>
//            </TouchableHighlight>
          
//         </ImageBackground>
        
//        </View>
//   );
// }
// const renderItem = ({item})=>( 
//   <Item title={item.title}/>
// );

// const renderItemVideo = ({item})=>( 
//   <ItemVideo title={item.title}/>
// );
// const renderItemClassVideo = ({item,sub_title})=>( 
//   <Itemclasscategory title={item.title} sub_title={item.sub_title}/>
// );
//     return(
//     //  <DrawerScreenWrapper>
//       // <View style={styles.container}>
//       <ScrollView style={{backgroundColor:'white'}}>

//       <View style = {{width :"100%",flexDirection:'row',margin:25,alignItems:'center'}}>
       
       
//       <TouchableHighlight 
//        onPress={ ()=>  this.props.navigation.toggleDrawer() }>
//        <Image
//        source={require('./imgs/Menu.png')}
//        style={styles.image_style_drawable}
     
//        ></Image> 
//        </TouchableHighlight>
//          <Image
//        source={require('./imgs/inamkes_logo.png')}
//        style={styles.image_style}
//        ></Image>

//       <View style={{flex:0.5}}/>

//        <View style={{flex:0.4,width:50,marginRight:45,height:35,flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:5,borderColor:'#00C458',borderWidth:1}}>

//        <Text style={{backgroundColor:'#007345',borderRadius:20,height:16,width:16}}></Text>
//         <Text style={{fontFamily:'Gilroy-Bold',marginLeft:5,fontSize:10,color:'#007345'}}>Classes</Text>

//        </View>
//        </View>
      
//       <View style={{padding:25,marginTop:8}}>
//       <Text style={{fontFamily:'Gilroy-Medium',fontSize:12}}>GoodMorning</Text>
//       <Text style={{fontFamily:'Gilroy-Bold',fontSize:24,color:'#002333'}}>Good Morning</Text>
//       </View>
 
//       <ImageBackground  
//        style={{marginLeft:25,marginRight:25,height:68,marginTop:10,justifyContent:'center',padding:10}}
//        imageStyle={{ borderRadius: 6}}
//        source={require('./imgs/background.png')}>
//        <View style={{flexDirection:'row',alignItems:'center'}}>
//         <View style={{flexDirection:'column',flex:1}}>
//        <Text style={{fontFamily:'Gilroy-Regular',fontSize:12,color:'#BAC3C7'}}>GoodMorning</Text>
//        <Text style={{fontFamily:'Gilroy-Medium',fontSize:14,color:'#FFFFFF'}}>Good Morning</Text>
//        </View>
        
//       <Image
//        source={require('./imgs/downarrow.png')}
//        style={{height:8,width:8,flex:0.05}}
//        ></Image>
  
//        </View>
//        </ImageBackground>

//       <FlatList 
//       horizontal
//        style={{marginLeft:25,marginTop:20,paddingRight:25,height:50,flexGrow:0,width:'100%'}}
//        data={DATA}
//        renderItem={renderItem}
//        keyExtractor={item => item.id}/>
      
//       <Text style={{fontFamily:'Gilroy-Medium',fontSize:12,color:'#002333',marginTop:15,marginLeft:25}}>Recent courses</Text>
    
//       <FlatList 
//       horizontal
//       style={{marginLeft:25,marginTop:5,paddingRight:25,height:120,flexGrow:0,width:'100%'}}
//       data={VideoData}
//        renderItem={renderItemVideo}
//        keyExtractor={itemVideo => itemVideo.id}/>

// <FlatList 
//     horizontal
//     style={{marginLeft:25,marginTop:20,paddingRight:25,height:300,flexGrow:0,width:'100%'}}
//     data={class_category}
//    renderItem={renderItemClassVideo}
//     keyExtractor={itemVideo => itemVideo.id}/>

//       </ScrollView>
//       // </View>
//       // {/* </DrawerScreenWrapper> */}
//     ) }}

    
// const styles = StyleSheet.create({
// container :{
//     backgroundColor :'#ffffff'   
//   }, 
//   img_container :{
//     height : '100%',
//     width : '100%',
//     alignItems :"center",
//     justifyContent:"center"   
//   }, 
//   image_style:{
//     height: 30,
//     width :30,
//     flex:0.8
//   }, 
//   image_style_drawable:{
//     height: 35,
//     width :35,
  
//   }, 
//   textinput_style:{
//     height: 60,
//     width :'30%',
//     color:'#ffffff',
//     borderRadius :5,
//     fontSize:14,
//     textAlign:'center',
//     fontFamily:'Gilroy-Regular',
//     textAlignVertical:'center',
//     backgroundColor :'#13394A'
//   }, 
//   textinputstyle:{
//     height: 60,
//     width :'68%',
//     marginLeft:10,
//     fontSize:14,
//     fontFamily:'Gilroy-Regular',
//     textAlignVertical:'center',
//     borderRadius :5,
//     color:'#ffffff',
//     backgroundColor :'#13394A'
//   }, 
//   button_style:{
//     height : 60,
//     width   :'86%',
//     borderRadius :5,
//     backgroundColor:'#00C458',
//     alignItems:'center',
//     marginTop:20,
//     justifyContent :'center'
//   }, 
//   button_text:{
//     color:'white',
//     fontFamily:'Gilroy-SemiBold',
//     fontSize:14
//   } })



import React,{Component} from "react";
import {ScrollView, View,StyleSheet,TextInput,SafeAreaView,ImageBackground,Image,TouchableHighlight,Text,FlatList, Button } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
import DrawerScreenWrapper from "./Drawer/DrawerScreenWrapper";
export default class InmakesHome  extends Component{
  constructor(){
    super();
    this.state = {
      name : null
    }

  }
  render(){
        const DATA = [


  {
    id:"1",
    title:"Biology"
  },
  {
    id:"2",
    title:"STL"
  },
  {
    id:"3",
    title:"C++"
  },
  {
    id:"4",
    title:"Java"
  },
  {
    id:"5",
    title:"Python"
  },
  {
    id:"6",
    title:"CP"
  },
  {
    id:"7",
    title:"ReactJs"
  },
  {
    id:"8",
    title:"NodeJs"
  },
  {
    id:"9",
    title:"MongoDb"
  },
  {
    id:"10",
    title:"ExpressJs"
  },
  {
    id:"11",
    title:"PHP"
  },
  {
    id:"12",
    title:"MySql"
  },
];

const VideoData = [
  {
    id:"1",
    title:"Course Title"
  },
  {
    id:"2",
    title:"Course Title"
  },
  {
    id:"3",
    title:"Course Title"
  },
  {
    id:"4",
    title:"Course Title"
  }

];

const class_category = [
  {
    id:"1",
    title:"Course Title",
    sub_title :"nmkolphhfxdfswauhbvbgfcgjhkjklolkjhgfjjk"
  },
  {
    id:"2",
    title:"Course Title",
    sub_title :"nmkolphhjjk"
  },
  {
    id:"3",
    title:"Course Title",
    sub_title :"nmkhgygyffdfdfseaekjkhbhgcgijpkolphhjjk"
  },
  {
    id:"4",
    title:"Course Title",
    sub_title :"nmkolphhhhhfrdgdryhfuygiuhukhukhjjk"
  }

];
 const Item = ({title}) => {
  return( 
    // <View >
    //   <Text>{title}</Text>
    // </View>

     <View style={{width:100,marginRight:10,height:40,flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:6,borderColor:'#000000',borderWidth:1}}>

       <Text style={{backgroundColor:'#00C458',borderRadius:25,height:23,width:23}}></Text>
        <Text style={{fontFamily:'Gilroy-SemiBold',marginLeft:5,fontSize:12,color:'#000000'}}
       onPress={() => this.props.navigation.navigate('SubjectDetails')}>{title}</Text>

       </View>
  );
}

const ItemVideo = ({title}) => {
  return( 
    
     <View>
      <ImageBackground  
      style={{width:200,marginRight:10,height:100,flexDirection:'row',alignItems:'flex-end',borderRadius:6,borderColor:'#000000',borderWidth:1}}
      imageStyle={{ borderRadius: 6}}
      source={require('./imgs/background.png')}>
       <Image source={require('./imgs/play.png')}
       style={{height:30,width:30,margin:10}}></Image>
        <Text style={{fontFamily:'Gilroy-SemiBold',fontSize:12,margin:5,height:25,color:'#ffffff'}}>{title}</Text>
        </ImageBackground>
       </View>
  );
}

const Itemclasscategory = ({title,sub_title}) => {
  return( 
     <View>
      <ImageBackground  
      style={{flexDirection:'column',width:260,marginRight:15,height:300,alignItems:'flex-start',borderRadius:6,borderColor:'#000000',borderWidth:1}}
      imageStyle={{ borderRadius: 6}}
      source={require('./imgs/background.png')}>
       <Image source={require('./imgs/play.png')}
       style={{height:80,borderRadius:40,width:80,marginTop:10,marginLeft:25,backgroundColor:'#ffffff'}}></Image>
        <Text style={{fontFamily:'Gilroy-SemiBold',fontSize:18,marginTop:10,marginLeft:25,color:'#FFFFFF'}}>{title}</Text>
        <Text style={{fontFamily:'Gilroy-Regular',fontSize:14,marginTop:10,marginLeft:25,marginRight:5,color:'#446270',flex:1}}>{sub_title}</Text>
      <TouchableHighlight 
      
        style ={{marginBottom:10,marginLeft:25,marginRight:5,height : 45,
          width   :'65%',
          borderRadius :5,
          backgroundColor:'#00C458',
          alignItems:'center',
          marginTop:10,
          justifyContent :'center'}}>

         <Text style ={styles.button_text}>Register</Text>
           </TouchableHighlight>
          
        </ImageBackground>
        
       </View>
  );
}
const renderItem = ({item})=>( 
  <Item title={item.title}/>
);

const renderItemVideo = ({item})=>( 
  <ItemVideo title={item.title}/>
);
const renderItemClassVideo = ({item,sub_title})=>( 
  <Itemclasscategory title={item.title} sub_title={item.sub_title}/>
);
    return(
      <View>
      {/* Your other components/content */}
      <ScrollView>
        {/* Your scrollable content */}
        <View style = {{width :"100%",flexDirection:'row',margin:25,alignItems:'center'}}>
       
     <TouchableHighlight 
              onPress={ ()=>  this.props.navigation.toggleDrawer() }>
              <Image
              source={require('./imgs/Menu.png')}
              style={styles.image_style_drawable}
            
              ></Image> 
              </TouchableHighlight>
                <Image
              source={require('./imgs/inamkes_logo.png')}
              style={styles.image_style}
              ></Image>
       
             <View style={{flex:0.5}}/>
       
              <View style={{flex:0.4,width:50,marginRight:45,height:35,flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:5,borderColor:'#00C458',borderWidth:1}}>
       
              <Text style={{backgroundColor:'#007345',borderRadius:20,height:16,width:16}}></Text>
               <Text style={{fontFamily:'Gilroy-Bold',marginLeft:5,fontSize:10,color:'#007345'}}>Classes</Text>
       
              </View>
              </View>
             
             <View style={{padding:25,marginTop:8}}>
             <Text style={{fontFamily:'Gilroy-Medium',fontSize:12}}>GoodMorning</Text>
             <Text style={{fontFamily:'Gilroy-Bold',fontSize:24,color:'#002333'}}>Good Morning</Text>
             </View>
        
             <ImageBackground  
              style={{marginLeft:25,marginRight:25,height:68,marginTop:10,justifyContent:'center',padding:10}}
              imageStyle={{ borderRadius: 6}}
              source={require('./imgs/background.png')}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
               <View style={{flexDirection:'column',flex:1}}>
              <Text style={{fontFamily:'Gilroy-Regular',fontSize:12,color:'#BAC3C7'}}>GoodMorning</Text>
              <Text style={{fontFamily:'Gilroy-Medium',fontSize:14,color:'#FFFFFF'}}>Good Morning</Text>
              </View>
               
             <Image
              source={require('./imgs/downarrow.png')}
              style={{height:8,width:8,flex:0.05}}
              ></Image>
         
              </View>
              </ImageBackground>
       
             <FlatList 
             horizontal
              style={{marginLeft:25,marginTop:20,paddingRight:25,height:50,flexGrow:0,width:'100%'}}
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}/>
             
             <Text style={{fontFamily:'Gilroy-Medium',fontSize:12,color:'#002333',marginTop:15,marginLeft:25}}>Recent courses</Text>
           
             <FlatList 
             horizontal
             style={{marginLeft:25,marginTop:5,paddingRight:25,height:100,flexGrow:0,width:'100%'}}
             data={VideoData}
              renderItem={renderItemVideo}
              keyExtractor={itemVideo => itemVideo.id}/>
       
       <FlatList 
           horizontal
           style={{marginLeft:25,marginTop:20,paddingRight:25,height:300,flexGrow:0,width:'100%'}}
           data={class_category}
          renderItem={renderItemClassVideo}
           keyExtractor={itemVideo => itemVideo.id}/>
       
       
        {/* ... more items ... */}
      </ScrollView>
    </View> 
    )
  }
}
const styles = StyleSheet.create({
container :{
    backgroundColor :'#ffffff'   
  }, 
  img_container :{
    height : '100%',
    width : '100%',
    alignItems :"center",
    justifyContent:"center"   
  }, 
  image_style:{
    height: 30,
    width :30,
    flex:0.8
  }, 
  image_style_drawable:{
    height: 35,
    width :35,
  
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