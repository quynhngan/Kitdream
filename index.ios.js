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
import KitLogo from "./Components/Test/Kitlogo"
import Login from "./Components/Test/Login/Login"
export default class KitDream extends Component {
  render() {
    return (
    <View>

<Login/>
    </View>


    );
  }
}

AppRegistry.registerComponent('KitDream', () => Login);
