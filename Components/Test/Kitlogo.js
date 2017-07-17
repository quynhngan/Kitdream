import React, {Component} from 'react';
import { StyleSheet,Text,View,Image, TouchableOpacity} from 'react-native';
export default class KitLogo extends Component{
  render(){
    return (
      <View style={styles.a}>
      <View style = {styles.logoContainer}>
      <TouchableOpacity>
      <Image
      style = {styles.logo}
      source ={require('../../image/chef_1.png')}
      />
    </TouchableOpacity>
</View>

</View>
    );

    }
  }
  const styles = StyleSheet.create({
    a: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFC0CB',
    },
    title: {
      color: 'white',
      fontSize: 50,
      fontWeight : 'bold',
      fontFamily : 'Noteworthy',
    },
  });
