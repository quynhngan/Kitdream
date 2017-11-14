import React, { Component } from 'react';
import {  View,Text,  StyleSheet,Dimensions,Image,TextInput} from 'react-native';
import chef_3 from "/Users/quynhngan/KitDream/image/chef_3.png";
import global from '/Users/quynhngan/KitDream/Components/Test/global.js'

const { height} = Dimensions.get ('window');
export default class Header extends Component {
  static navigationOptions = {headerTintColor:"white",headerStyle: {
           backgroundColor:"#FFC0CB"} }

  render() {
    const {_wrapper} = styles;
    return (
  <View>
  <View style= {_wrapper}>
    <Text > {global.currentRecipe.name}</Text>
    <Text> -{global.currentRecipe.number_of_servings} </Text>
    <Text> Price </Text>
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
  _wrapper:{
    height: height/10,
    borderBottomWidth:1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "#95989A",
    flexDirection:'row',

  },
});
