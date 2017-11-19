import React, { Component } from 'react';
import {  View,Text,  StyleSheet,Dimensions,Image,TextInput,TouchableOpacity} from 'react-native';
import chef_3 from "/Users/quynhngan/KitDream/image/chef_3.png";
import global from '/Users/quynhngan/KitDream/Components/Test/global.js';
export default class Oder extends Component {
  static navigationOptions = {headerTintColor:"white",title: "Delivery Information",headerStyle: {
           backgroundColor:"#FFC0CB"} }
constructor(props) {
  super(props);
  this.state = {
    isLoading: true,
    name:"",
    address:"",
    phone:"",
  }
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
<View style = { styles.formContainer}>
      <View style={styles.container}>
      <Text style = {styles.textStyle}> Name </Text>
      <TextInput style = { styles.input}
      onChangeText={(name) => this.setState({name})}
      value={this.state.name}
      placeholderTextColor="#FFFFFF"
      autoCorrect={false}
      autoCapitalize='none'
      keyboardType= 'name-phone-pad'
      />
      <Text style = {styles.textStyle}> Address </Text>
      <TextInput style = { styles.input}
      onChangeText={(address) => this.setState({address})}
       value={this.state.address}
      placeholderTextColor="#FFFFFF"
      autoCorrect={false}
      autoCapitalize='none'
      keyboardType= 'name-phone-pad'
      />
      <Text style = {styles.textStyle}> Phone-number </Text>
      <TextInput style = { styles.input}
      onChangeText={(phone) => this.setState({phone})}
       value={this.state.phone}
      placeholderTextColor="#FFFFFF"
      autoCorrect={false}
      autoCapitalize='none'
      keyboardType= 'phone-pad'
      />
      <TouchableOpacity style = {styles.buttonContainer}

      >
      <Text style ={styles.buttonText}> Send Order </Text>
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
    marginTop: 20,
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
    textStyle: {
      fontSize:16,
      color: '#95989A',
      paddingBottom: 10,
    },
}

);
