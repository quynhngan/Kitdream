/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import CheckBox from 'react-native-check-box';


export default class ShoppingList extends Component {
  render() {
    return (
      <View style={styles.container}>
      <CheckBox
  label='Label'
  checked={false} />
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
