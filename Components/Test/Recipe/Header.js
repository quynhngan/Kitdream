/* @flow */

import React, { Component } from 'react';
import {  View,Text,  StyleSheet,Dimensions,Image, TouchableOpacity} from 'react-native';
import chef_3 from "/Users/quynhngan/KitDream/image/chef_3.png";
const { height,width} = Dimensions.get ('window');
export default class Header extends Component {
  render() {
    const {wrapper,iconStyle,textStyle} = styles;
    return (
      <View style={{height:height/10}}>
        <View style = {wrapper}>
        <Image source ={chef_3} style = {iconStyle}/>
        <TouchableOpacity
       onPress={()=>{this.props.navigation.navigate('Recipe')}}
        >
        <Text style = {textStyle}> Filter </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: height/10,
    backgroundColor:"#FFC0CB",
    alignItems: 'center',
    paddingTop: 20,
    justifyContent:'center',
  flexDirection: 'row',
  },
  iconStyle:{
    width: 32,
    height: 32,
    alignItems: 'center',
    marginLeft: width/2-25,
  },
  textStyle: {
    marginLeft: 120,
    color: 'white',
    fontSize: 15
  }
});
