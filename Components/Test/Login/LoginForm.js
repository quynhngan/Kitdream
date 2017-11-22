/* @flow */

import React, { Component } from 'react';
import {  View,  Text,  StyleSheet,TextInput, TouchableOpacity,Image, Alert} from 'react-native'
import global from '/Users/quynhngan/KitDream/Components/Test/global.js'
import saveUser from '/Users/quynhngan/KitDream/Components/Test/Login/saveUser.js'
export default class LoginForm extends Component {
static navigationOptions = {header:null}
constructor(props) {
  super(props);
  this.state = {
    isLoading: true,
    e:"",
    pass:"",
  }
}
signIn() {
  return fetch('http://localhost:4000/users/sign_in', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ user: {
    email: this.state.e,
    password: this.state.pass,
  }})
})
.then((response) => response.json())
.then((responseJson) => {
    if (responseJson.errors) {
      this.alertError()
    } else {
      global.currentUser = responseJson;
      saveUser(responseJson)
      .then(user => {
        this.setState({user})
      })
      .catch((error) => {
        console.error(error);
      })
      setTimeout(() => {
        this.props.navigation.navigate('ProfileDetail')
      }, 200)
    }
  }
)

}

alertError(){
  Alert.alert(
    'Notice',
    'email or password is incorrect',
    [
      {text: 'OK',onPress:()=>console.log('Ask me later pressed')}
    ],
    {cancelable: false}
  );
}
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
      onChangeText={(e) => this.setState({e})}
      value={this.state.e}
      placeholder="Email"
      placeholderTextColor="#FFFFFF"
      autoCorrect={false}
      autoCapitalize='none'
      keyboardType= 'email-address'
      />
      <TextInput style = { styles.input}
      onChangeText={(pass) => this.setState({pass})}
       value={this.state.pass}
      placeholder="Password"
      secureTextEntry
      placeholderTextColor="#FFFFFF"
      />
      <TouchableOpacity style = {styles.buttonContainer}
      onPress={this.signIn.bind(this)}
      >
      <Text style ={styles.buttonText}> Login </Text>
      </TouchableOpacity>
      <Text style ={styles.fontText_1}>{"Don't have an account? "} </Text>
      <TouchableOpacity
      onPress={()=>{this.props.navigation.navigate('SignupForm')}}>
      <Text style ={styles.fontText_2}>Sign up</Text>
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
    color: '#95989A',
    paddingHorizontal: 10,
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

  },  a: {
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
    },
}

);
