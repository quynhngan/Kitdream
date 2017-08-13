import React, { Component } from 'react';
import { View,Text, StyleSheet,ScrollView,Dimensions,Image, TouchableOpacity, Alert} from 'react-native';
import chef_3 from "/Users/quynhngan/KitDream/image/chef_3.png";
import CheckBox from 'react-native-check-box';
import global from '/Users/quynhngan/KitDream/Components/Test/global.js'
const { height,width} = Dimensions.get ('window');
export default class ShoppingList extends Component {
  constructor(props) {
    super(props);
  }
  emptyCart(){
    global.emptyCart();
  }
  render() {
    const {wrapper,iconStyle,_wrapper,textStyle,_textStyle,textStyleReset} = styles;
    return (
      <View>
      <View style={{height:height/10}}>
        <View style = {wrapper}>
        <Image source ={chef_3} style = {iconStyle}/>
        <TouchableOpacity onPress={() => {this.emptyCart()}}>
        <Text style = {textStyleReset}> Reset </Text>
        </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
      {this.props.cart.map((ingredient) => {
        return (
          <TouchableOpacity

          >
          <View style= {_wrapper}>

            <Text style ={textStyle}>{ingredient.name}</Text>
            <Text style ={textStyle}> -{ingredient.number_of_units}</Text>
            <Text style ={textStyle}> {ingredient.units_of_measurement}</Text>

          </View>
          </TouchableOpacity>
        )
      })}

      </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    height: height/10,
    backgroundColor:"#FFC0CB",
    alignItems: 'center',
    paddingTop: 20,
    justifyContent:'center',
  flexDirection: 'row',
  },
  iconStyle:{
    width: 32,
    height: 32,
    alignItems: 'center',
    marginLeft: width/2-25,
},
_wrapper:{
  height: height/12,
  borderBottomWidth:1,
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: "#95989A",
  flexDirection:'row'
},
textStyle: {
  fontSize:14,
  color: '#95989A',
  justifyContent:'center',
},
_textStyle: {
  fontSize:14,
  color: 'white',
  justifyContent:'center',
},
textStyleReset:{
  marginLeft: 120,
  color: 'white',
  fontSize: 15
}

});
