
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
import Contact from "/Users/quynhngan/KitDream/Components/Test/Login/Contact.js"
import Tabbar from "./Components/Test/Tabbar"
import Recipe from "./Components/Test/Recipe/Recipe"
import Search from "./Components/Test/Search/Search"
import HomeScreen from "./Components/Test/HomeScreen"
import LoginForm from "./Components/Test/Login/LoginForm"
import OrderHistory from "/Users/quynhngan/KitDream/Components/Test/Login/OrderHistory.js";
console.disableYellowBox = true;
export default class KitDream extends Component {
  render() {
    return (
    <View>
<Tabbar/>
<ProfileDetail/>
<OrderHistory/>
    </View>



    );
  }
}

AppRegistry.registerComponent('KitDream', () => Tabbar);
