import React, { Component } from 'react';
import {  View,  Text,  StyleSheet,TextInput, TouchableOpacity,Image, Alert} from 'react-native';

export default class LoginForm extends Component {
  static navigationOptions = {header:null}
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      e:"",
      pass:"",
      name:"",
    }
  }
  register() {
    return fetch('http://localhost:4000/users/sign_up', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: {
      email: this.state.e,
      full_name: this.state.name,
      password: this.state.pass,
    }})
  })
  .then((response) => response.json())
  .then((responseJson) => {
    this.alertSusscess()
      this.props.navigation.navigate('LoginForm')

    }
  )
  .catch((error) => {
  this.alertError()
});

  }
  alertError(){
    Alert.alert(
      'Notice',
      'email adress already in use by another account',
      [
        {text: 'OK',onPress:()=>console.log('Ask me later pressed')}
      ],
      {cancelable: false}
    );
  }
  alertSusscess(){
    Alert.alert(
      'Notice',
      'Susscessfully!',
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
      onChangeText={(name) => this.setState({name})}
       value={this.state.name}
      placeholder="Name"
      placeholderTextColor="#FFFFFF"
      autoCorrect={false}
      autoCapitalize='none'
      />
      <TextInput style = { styles.input} type ='password'
      onChangeText={(pass) => this.setState({pass})}
       value={this.state.pass}
       secureTextEntry
      placeholder="Password"
      placeholderTextColor="#FFFFFF"
      />
      <TouchableOpacity style = {styles.buttonContainer}
      onPress={this.register.bind(this)}
      >
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
    color: '#95989A',
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
