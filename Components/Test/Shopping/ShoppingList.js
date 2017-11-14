import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View,Text, StyleSheet,ScrollView,Dimensions,Image, TouchableOpacity, Alert} from 'react-native';
import chef_3 from "/Users/quynhngan/KitDream/image/chef_3.png";
import CheckBox from 'react-native-check-box';
import global from '/Users/quynhngan/KitDream/Components/Test/global.js'

const { height,width} = Dimensions.get ('window');
export default class ShoppingList extends Component {
  static navigationOptions = {header:null}
  static contextTypes = {
    cart: PropTypes.array
  }
  emptyCart(){
    global.emptyCart();
  }
  toggleIngredient(ingredient) {
    ingredient.toggle = !ingredient.toggle
    this.forceUpdate()
  }
  render() {
    const {wrapper,iconStyle,_wrapper,_textStyle,textStyleReset,wrapper_} = styles;
    const carts = this.props.screenProps || []

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
      <View>
      <ScrollView>
      {carts.map((ingredient) => {
        return (
          <TouchableOpacity
          onPress ={()=> this.toggleIngredient(ingredient)}

          >
          <View style= {_wrapper}>

            <Text style ={[styles.textStyle,ingredient.toggle && styles.textStyle_]}>{ingredient.name}</Text>
            <Text > -{ingredient.number_of_units*global.currentServing}</Text>
            <Text > {ingredient.units_of_measurement}</Text>
          </View>
          </TouchableOpacity>
        )
      })}
      <TouchableOpacity
     onPress={()=>{this.props.navigation.navigate('Oder')}}
      >
      <Text> Buy Now </Text>
      </TouchableOpacity>
      <View style={wrapper_}>
      </View>
      </ScrollView>
</View>
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
  wrapper_: {
    height: height/4,
    alignItems: 'center',
    paddingTop: 20,
    justifyContent:'center',

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
textStyle_: {
  fontSize:14,
  color: '#95989A',
  justifyContent:'center',
  textDecorationLine:'line-through'
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
