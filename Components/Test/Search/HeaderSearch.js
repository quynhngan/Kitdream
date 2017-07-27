import React, { Component } from 'react';
import {  View,Text,  StyleSheet,Dimensions,Image,TextInput} from 'react-native';
import chef_3 from "/Users/quynhngan/KitDream/image/chef_3.png";
const { height} = Dimensions.get ('window');
export default class Header extends Component {
  render() {
    const {wrapper,textInput} = styles;
    return (
      <View style={wrapper}>
       <TextInput style = {textInput}
       placeholder = "search"
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: height/9,
    backgroundColor:"#FFFFFF",
      justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#95989A',

  },
textInput: {
  height: 30,
  width :300,
  borderRadius :20,
  backgroundColor:'#FFF2F4',
  marginTop: 20,
  color: '#95989A',
  textAlign:'center',
  fontSize:14

}


});
