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

import Test from "./Components/Test/Test"
import Home from "./Components/Test/Home"
import KitLogo from "./Components/Test/Home/Kitlogo"
import Login from "./Components/Test/Login/Login"
import DemoListView from "./Components/Test/DemoListView"
import Tabbar from "./Components/Test/Tabbar"
import Recipe from "./Components/Test/Recipe/Recipe"
export default class KitDream extends Component {
  render() {
    return (
    <View>
    <Recipe/>
<Tabbar/>
<Login/>
    </View>



    );
  }
}

AppRegistry.registerComponent('KitDream', () => Tabbar);
