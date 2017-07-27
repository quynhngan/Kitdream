/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,Dimensions,Image,ScrollView
} from 'react-native';
import food from "/Users/quynhngan/KitDream/image/food.jpg";

import Header from "./Header";
const {height,width} = Dimensions.get('window');
export default class RecipeDetail extends Component {
  static navigationOptions = {headerTintColor:"white"}
  render() {
    const {wrapper_1,imageStyle,nameStyle,wrapper_2} = styles;
    return (
      <View>

      <ScrollView>
      <View style = {wrapper_1}>
<View style={{flex:3}}>
<Image source ={food} style={imageStyle}/>
</View>
      </View>
      <Text style = {nameStyle}> Name </Text>
<View style ={wrapper_2}>

</View>
</ScrollView>
      </View>
    );
  }
}
const imageWidth = width;
const imageHeight = height/2.7 ;

const styles = StyleSheet.create({
  wrapper_1: {height: height/2.7,
  backgroundColor: '#FFFFFF',

  },
  wrapper_2: {
    height: height/6,
    backgroundColor:"#FFFFFF",
    borderWidth: 1,
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
  },  nameStyle: {
      paddingTop: 15,
      paddingLeft: 15,
      fontSize:14,
      color: '#95989A',
      justifyContent:'center',
    },
});
