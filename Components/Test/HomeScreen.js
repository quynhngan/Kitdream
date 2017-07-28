import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Dimensions, Image, ScrollView, ActivityIndicator,TouchableOpacity} from 'react-native';
import food from "/Users/quynhngan/KitDream/image/food.jpg";

import Header from "/Users/quynhngan/KitDream/Components/Test/Recipe/Header.js";
const {height,width} = Dimensions.get('window');
export default class RecipeDetail extends Component {
  static navigationOptions = {headerTintColor:"white"}


  render() {


    const {wrapper_1,imageStyle,nameStyle,wrapper_2,textStyle,button, buttonContainer} = styles;
    return (

      <ScrollView>
      <View style = {wrapper_1}>
<View style={{flex:3}}>
<Image source ={food} style={imageStyle}/>
</View>
      </View>
<Text style = {nameStyle}> Name </Text>
<View style ={wrapper_2} >
<Text style={textStyle}> Difficuty: Easy </Text>
<Text style={textStyle}> Pre-Time: 30 min </Text>
</View>
<View style ={wrapper_2} >
<Text style={textStyle}> Ingredients </Text>
<Text style={textStyle}> Servings  </Text>
</View>
<View>
<Text> - </Text>
<Text> - </Text>
<Text> - </Text>
<Text> - </Text>
</View>
  <TouchableOpacity style = {buttonContainer}>
<Text style ={button}> Add to Shopping List </Text>
</TouchableOpacity>
<View style ={wrapper_2}>
<Text style={textStyle}> How-to </Text>
</View>
</ScrollView>

    );
  }
}
const imageWidth = width;
const imageHeight = height/2.7 ;

const styles = StyleSheet.create({
  wrapper_1: {height: height/2.7,
  backgroundColor: '#FFFFFF',

  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
  },  nameStyle: {
      paddingTop: 15,
      paddingBottom: 30,
      fontSize:16,
      color: '#95989A',
      textAlign:'center',



    },
    wrapper_2: {
      margin: 10,
      justifyContent:'space-between',
      flexDirection:'row',

    },
    textStyle: {
      fontSize:16,
      color: '#95989A',
    },
    button: {
      textAlign:'center',
      color: "#FFFFFF",
      fontSize: 16,
      fontFamily: 'Helvetica Neue',
    },
    buttonContainer: {
      height: 40,
      width :180,
      borderRadius :6,
      backgroundColor :"#FFC0CB",
      marginLeft: 180,
      marginTop: 15,
      paddingVertical: 10,

    },
});
