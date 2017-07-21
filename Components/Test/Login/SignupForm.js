import React, { Component } from 'react';
import {  View,  Text,  StyleSheet,TextInput, TouchableOpacity,Image} from 'react-native';

export default class LoginForm extends Component {
  static navigationOptions = {header:null}
  render() {
    return (
      <View style={styles.a}>
      <View style = {styles.logoContainer}>
      <Image
      style = {styles.logo}
      source ={require('/Users/quynhngan/KitDream/image/chef_2.png')}
      />

</View>
<View style = { styles.formContainer}>
      <View style={styles.container}>
      <TextInput style = { styles.input}
      placeholder="Email"
      placeholderTextColor="#FFFFFF"
      />
      <TextInput style = { styles.input} type ='password'
      placeholder="Name"
      placeholderTextColor="#FFFFFF"
      />
      <TextInput style = { styles.input} type ='password'
      placeholder="Password"
      placeholderTextColor="#FFFFFF"
      />
      <TouchableOpacity style = {styles.buttonContainer}>
      <Text style ={styles.buttonText}> Sign up </Text>
      </TouchableOpacity>
      <Text style ={styles.fontText_1}> Already have an account? </Text>
      <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
      <Text style ={styles.fontText_2}>Login here</Text>
      </TouchableOpacity>
      </View>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
paddingBottom: 200
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

  },
  fontText_1: {
    color: "#95989A",
    paddingTop: 80,
    fontSize: 14,
    fontFamily: 'Helvetica Neue',
    textAlign:'center',



  },
  fontText_2: {
    color: "#FFC0CB",
    fontSize: 14,
    fontFamily: 'Helvetica Neue',
    textAlign:'center',

  },a: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 100
  },
  logo: {
    width: 70,
    height: 70,

  },
  logoContainer: {
    alignItems :'center',
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: 20,
  }
}

);
