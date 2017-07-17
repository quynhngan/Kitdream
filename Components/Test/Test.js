import React, {Component} from "react";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native";

export default class Test extends Component{
  render(){
    return (
        <TouchableOpacity>
      <View style = {rec.bao}>
      <Text>{this.props.name}  </Text>
      </View>
      </TouchableOpacity>
    )
  }
}
var rec = StyleSheet.create({
  bao : {width:100, height:100, backgroundColor:"#FFC0CB", margin :20}
});
