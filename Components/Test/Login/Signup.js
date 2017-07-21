import React, {Component} from 'react';
import { StyleSheet,Text,View,Image } from 'react-native';
import SignupForm from './SignupForm';
export default class KitLogo extends Component{
  render(){
    return (
      <View style={styles.a}>
      <View style = {styles.logoContainer}>
      <Image
      style = {styles.logo}
      source ={require('/Users/quynhngan/KitDream/image/chef_2.png')}
      />

</View>
<View style = { styles.formContainer}>
<SignupForm/>
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
  });
