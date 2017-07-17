/* @flow */

import React, { Component } from 'react';
import {  View,  Text,  StyleSheet,TextInput, TouchableOpacity} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
      <TextInput style = { styles.input}
      placeholder="Email"
      placeholderTextColor="#FFFFFF"
      />
      <TextInput style = { styles.input} type ='password'
      placeholder="Password"
      placeholderTextColor="#FFFFFF"
      />
      <TouchableOpacity style = {styles.buttonContainer}>
      <Text style ={styles.buttonText}> Login </Text>
      </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
paddingBottom: 300
  },
  input: {
    height: 40,
    width :300,
    borderRadius :6,
    backgroundColor:'#E1E1E1',
    marginBottom: 10,
    color: '#FFFFFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    height: 40,
    width :300,
    borderRadius :6,
    backgroundColor :"#FFC0CB",
    marginTop: 10,
    paddingVertical: 10
  },
  buttonText: {
    textAlign:'center',
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: 'Helvetica Neue',

  }

  }

);
