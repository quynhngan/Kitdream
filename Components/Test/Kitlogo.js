import React, {Component} from 'react';
import { StyleSheet,Text,View} from 'react-native';
export default class KitLogo extends Component{
  render(){
    return (
      <View style={styles.a}>
<Text style = {styles.title}> Kitdream </Text>
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
