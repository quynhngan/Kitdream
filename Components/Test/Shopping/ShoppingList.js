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
  removeRecipe(name) {
      global.removeRecipe(name);
  }
  incrRecipe(name) {
      global.incrRecipe(name);
  }
  decrRecipe(name) {
      global.decrRecipe(name);
  }

  /*toggleIngredient(recipe) {
    recipe.toggle = !recipe.toggle
    this.forceUpdate()
  }*/
  render() {
    const {wrapper,iconStyle,_wrapper,textStyle,_textStyle,textStyleReset,wrapper_,productImage,mainRight,txtName,txtPrice,productStyle,numberOfProduct} = styles;
    const cart = this.props.screenProps || []

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
      {cart.map((recipes) => (



          <View style={productStyle}>
                      <Image source ={{url:recipes.image_url}} style={productImage}/>
                          <View style={[mainRight]}>
                              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                  <Text style={txtName}>{recipes.name}</Text>
                                  <TouchableOpacity onPress={() => {this.removeRecipe(recipes.name)}}>
                                      <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                                  </TouchableOpacity>
                              </View>
                              <View>
                                  <Text style={txtPrice}> $$ </Text>
                              </View>

                                   <View style={numberOfProduct}>
                                   <TouchableOpacity onPress={() => this.decrRecipe(recipes.name)}>
                                       <Text style = {textStyle}>-</Text>
                                   </TouchableOpacity>
                                       <Text style ={textStyle}> {recipes.number_of_servings} </Text>
                                       <TouchableOpacity onPress={() => this.incrRecipe(recipes.name)}>
                                           <Text style={textStyle}>+</Text>
                                       </TouchableOpacity>
                                   </View>

                          </View>
                      </View>


        )
      )}
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
  fontSize:16,
  color: '#95989A',
  justifyContent:'center',
  letterSpacing: 4,
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
},
productStyle: {
       flexDirection: 'row',
       margin: 10,
       padding: 10,
       backgroundColor: '#FFFFFF',
       borderRadius: 2,
       shadowColor: '#3B5458',
       shadowOffset: { width: 0, height: 3 },
       shadowOpacity: 0.2
   },
   productImage: {
       width: 30,
       height: 60,
       flex: 1,
       resizeMode: 'center'
   },
   mainRight: {
       flex: 3,
       justifyContent: 'space-between'
   },
   productController: {
       flexDirection: 'row'
   },
   numberOfProduct: {
       flex: 1,
       flexDirection: 'row',
       justifyContent: 'space-around'
   },
   txtName: {
       paddingLeft: 20,
       color: '#A7A7A7',
       fontSize: 16,
       fontWeight: '400',
       fontFamily: 'Avenir'
   },
   txtPrice: {
       paddingLeft: 20,
       color: '#C21C70',
       fontSize: 16,
       fontWeight: '400',
       fontFamily: 'Avenir'
   },
   numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',

    },


});
