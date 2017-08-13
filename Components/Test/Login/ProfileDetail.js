import React, { Component } from 'react';
import {  View,Text,  StyleSheet,Dimensions,Image, TouchableOpacity} from 'react-native';
import chef_3 from "/Users/quynhngan/KitDream/image/chef_3.png";
import profile from "/Users/quynhngan/KitDream/image/profile.png";
import getUser from '/Users/quynhngan/KitDream/Components/Test/Login/getUser.js'
import saveUser from '/Users/quynhngan/KitDream/Components/Test/Login/saveUser.js'

const { height} = Dimensions.get ('window');
export default class Header extends Component {
  static navigationOptions = {header:null}
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    getUser()
    .then(user => this.setState({user}))
    .catch((error) => {
      console.error(error);
    })
  }
  logout() {
    saveUser({})
    .then(user => {
      this.setState({user: {}})
      this.props.navigation.navigate('LoginForm')
    })
    .catch((error) => {
      console.error(error);
    })
  }
  render() {
    const {wrapper,iconStyle,logoProfile,_wrapper, textStyle,__wrapper,buttonContainer,buttonText} = styles;
    const {user} = this.state;

    return (
      <View style ={{backgroundColor:"#FFFFFF", flex: 1}}>
      <View style={{height:height/10}}>
        <View style = {wrapper}>
        <Image source ={chef_3} style = {iconStyle}/>
        </View>
      </View>
      <View style ={_wrapper}>
      <Image source = {profile} style ={logoProfile}/>
      </View>

      <Text style = {textStyle}> Name: {user.full_name} </Text>
      <Text style = {textStyle}> Email: {user.email} </Text>
      <View>
      <TouchableOpacity style = {buttonContainer}
      onPress={()=>this.logout()}
      >
      <Text style ={buttonText}> Logout </Text>
      </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: height/10,
    backgroundColor:"#FFC0CB",
      justifyContent: 'center',
        alignItems: 'center',
  paddingTop: 20,
  },
  _wrapper:{
    justifyContent: 'center',
      alignItems: 'center',
  },
  iconStyle:{
    width: 32,
    height: 32,
  },
  logoProfile: {
    alignItems :'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  __wrapper:{
    height: height/12,
    borderBottomWidth:1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "#95989A"
  },
  textStyle: {
    paddingTop: 30,
    paddingLeft: 20,
    fontSize :18,
    color :'#FFC0CB'

  },
  buttonContainer: {
    height: 40,
    width :100,
    borderRadius :6,
    backgroundColor :"#FFC0CB",
    marginTop: 50,
    marginLeft:250,
    paddingVertical: 10
  },
  buttonText: {
    textAlign:'center',
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: 'Helvetica Neue',
  }
});
