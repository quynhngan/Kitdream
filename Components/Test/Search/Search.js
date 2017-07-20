import React,{Component} from 'react';
import{ View, Text,TouchableOpacity} from 'react-native';
import HeaderSearch from "./HeaderSearch";
export default class Screen1 extends Component{
  render(){
    return(
      <View style = {{ flex: 1}}>
<HeaderSearch/>
      </View>
    );
  }
}
