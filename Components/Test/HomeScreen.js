import React, {Component} from 'react';
import {
  Text,
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

 class HomeScreen extends React.Component {

  render() {
    const { navigate} = this.props.navigation ;
    return (
      <View>
      <Text>Hello, Navigation!</Text>;
      <Button onPress = {()=> navigate('Click')}/>
    </View>
  );
  }
}


 class Screen1 extends React.Component {
  render(){
    return (
      <View>
      <Text> This is Screen 1 </Text>
      </View>
    );
  }
}
const  = StackNavigator({
  Home: { screen: HomeScreen },
  Screen1: {screen: Screen1 },
});
AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
export default HomeScreen;
