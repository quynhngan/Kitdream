import React, { Component } from 'react';
import {  View,Text,  StyleSheet,Dimensions,Image} from 'react-native';
import chef_3 from "/Users/quynhngan/KitDream/image/chef_3.png";
const { height} = Dimensions.get ('window');
export default class Header extends Component {
  static navigationOptions = {header:null}
  render() {
    const {wrapper,iconStyle} = styles;
    return (
      <View style={{height:height/10}}>
        <View style = {wrapper}>
        <Image source ={chef_3} style = {iconStyle}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: height/10,
    backgroundColor:"#FFC0CB",
      justifyContent: 'center',
        alignItems: 'center',
  paddingTop: 20,
  },
  iconStyle:{
    width: 32,
    height: 32,
  },
});
