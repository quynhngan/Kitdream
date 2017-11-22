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
    const {background,wrapper,iconStyle,logoProfile,_wrapper, textStyle,buttonContainer,buttonText,container,a,wrapperName} = styles;
    const {user} = this.state;

    return (
      <View style={background}>

      <View style={{height:height/10}}>
        <View style = {wrapper}>
        <Image source ={chef_3} style = {iconStyle}/>
        </View>
      </View>

    <View >
      <View style ={_wrapper}>
      <Image source = {profile} style ={logoProfile}/>
      </View>
      <View style={wrapperName}>
      <Text style = {textStyle}>{user.full_name} </Text>
      </View>
        <View style={a}>
      <TouchableOpacity style = {buttonContainer}
      onPress={()=>this.props.navigation.navigate('OrderHistory')}
      >
      <Text style ={buttonText}> Order History </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {buttonContainer}
      onPress={()=>this.props.navigation.navigate('Contact')}
      >
      <Text style ={buttonText}>Contact </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {buttonContainer}
      onPress={()=>this.logout()}
      >
      <Text style ={buttonText}> Logout </Text>
      </TouchableOpacity>
      </View>
      </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  background:{
    backgroundColor: '#FFFFFF',
    flex:1,
  },
  container:{
paddingBottom: 200
  },
  wrapperName:{
      justifyContent: 'center',
      paddingTop: 0,
      alignItems: 'center',
  },
  a: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 150
  },
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
  buttonContainer: {
    height: 40,
    width :250,
    borderRadius :6,
    backgroundColor :"#FFC0CB",
    marginTop: 10,
    paddingVertical: 10
  },
  textStyle: {
    paddingTop: 30,
    paddingLeft: 20,
    fontSize :18,
    color :'#95989A'

  },
  buttonText: {
    textAlign:'center',
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: 'Helvetica Neue',
  }
});
