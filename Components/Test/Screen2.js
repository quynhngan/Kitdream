import React,{Component} from 'react';
import{ View, Text,TouchableOpacity} from 'react-native';

export default class Screen2 extends Component{

  render(){
    return(
      <View style = {{ flex: 3, backgroundColor : "#FFFFFF"}}>
      <TouchableOpacity style = {{backgroundColor :"#FFC0CB"}}
      onPress ={()=>{this.props.navigation.goBack()}}>
      <Text> Screen2 </Text>
      </TouchableOpacity>
      </View>
    );
  }
}
