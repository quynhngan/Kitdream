
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Home from "./Components/Test/Home"
import ProfileDetail from "/Users/quynhngan/KitDream/Components/Test/Login/ProfileDetail.js"
import Tabbar from "./Components/Test/Tabbar"
import Recipe from "./Components/Test/Recipe/Recipe"
import Search from "./Components/Test/Search/Search"
import HomeScreen from "./Components/Test/HomeScreen"
import LoginForm from "./Components/Test/Login/LoginForm"
console.disableYellowBox = true;
export default class KitDream extends Component {
  render() {
    return (
    <View>
<ProfileDetail/>
<Tabbar/>
    </View>



    );
  }
}

AppRegistry.registerComponent('KitDream', () => Tabbar);
