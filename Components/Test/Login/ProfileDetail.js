import React, { Component } from 'react';
import {  View,Text,  StyleSheet,Dimensions,Image} from 'react-native';
import chef_3 from "/Users/quynhngan/KitDream/image/chef_3.png";
import profile_pic from "/Users/quynhngan/KitDream/image/profile_pic.png";

const { height} = Dimensions.get ('window');
export default class Header extends Component {
  static navigationOptions = {header:null}
  render() {
    const {wrapper,iconStyle,logoProfile,_wrapper} = styles;
    return (
      <View style ={{backgroundColor:"#FFFFFF", flex: 1}}>
      <View style={{height:height/10}}>
        <View style = {wrapper}>
        <Image source ={chef_3} style = {iconStyle}/>
        </View>
      </View>
      <View style ={_wrapper}>
      <Image source = {profile_pic} style ={logoProfile}/>

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
  _wrapper:{
    justifyContent: 'center',
      alignItems: 'center',
  },
  iconStyle:{
    width: 32,
    height: 32,
  },
  logoProfile: {
    alignItems :'center',
    justifyContent: 'center',
    marginTop: 40,
  }
});
