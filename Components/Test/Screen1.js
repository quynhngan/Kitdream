import React, {
  Component
} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class Screen1 extends Component {
  render() {
    return ( <
      View style = {
        {
          flex: 1,
          backgroundColor: "#FFC0CB"
        }
      } >
      <
      TouchableOpacity style = {
        {
          backgroundColor: "#FFFFFF"
        }
      }
      onPress = {
        () => {
          this.props.navigation.navigate('Screen_2')
        }
      } >
      <
      Text > screen1 < /Text> <
      /TouchableOpacity> <
      /View>
    );
  }
}