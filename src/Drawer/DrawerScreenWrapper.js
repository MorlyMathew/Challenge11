import { View,Text } from "react-native";
import React from "react";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";
import {StyleSheet} from "react-native";
import { transform } from "@babel/core";

const DrawerScreenWrapper = ({children}) =>{
   const progress = useDrawerProgress();


//    const animatedStyle = useAnimatedStyle( () => ({
//     transform :[{scale : interpolate(progress.value, [0,1], [1,0.8], 'clamp')}]  
//    }));

// const animatedStyle = useAnimatedStyle(() => {
//     const scale = interpolate(progress.value, [0, 1], [1, 0.8], 'clamp'
//     );
//     const borderRadius = interpolate(progress.value, [0, 1], [0, 10], 'clamp'
//     );
//     return {
//       transform: [{scale}],
//       borderRadius,
//     };
//   });
    return(
        <Animated.View >
        {children}
        </Animated.View>
    );
}

export default DrawerScreenWrapper;
// const styles = StyleSheet.create({
//     container :{
//         flex : 1   
//       } 
//     })