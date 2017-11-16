import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Dimensions, Image, ScrollView, ActivityIndicator,TouchableOpacity} from 'react-native';
import food from "/Users/quynhngan/KitDream/image/food.jpg";
import Recipe from "/Users/quynhngan/KitDream/Components/Test/Recipe/Recipe.js"
import Header from "/Users/quynhngan/KitDream/Components/Test/Recipe/Header.js";
import global from '/Users/quynhngan/KitDream/Components/Test/global.js'
const {height,width} = Dimensions.get('window');
export default class RecipeDetail extends Component {
  static navigationOptions = {headerTintColor:"white",headerStyle: {
           backgroundColor:"#FFC0CB"} }
  addThisIngredientToShopping(recipes){

    global.currentRecipe =   this.props.navigation.state.params.recipes
    global.currentServing =   this.props.navigation.state.params.recipes.number_of_servings
    global.addRecipeToShopping(recipes);
  }
  incrServing(number_of_servings) {
    this.props.navigation.state.params.recipes.number_of_servings += 1;
    this.forceUpdate()
  }
  decrServing(number_of_servings) {

    this.props.navigation.state.params.recipes.number_of_servings -= 1;
    this.forceUpdate()
  }

  render() {


    const {wrapper_1,imageStyle,nameStyle,wrapper_2,textStyle,button, buttonContainer,_wrapper} = styles;
    return (

      <ScrollView style={{backgroundColor:'#ffffff'}}>
      <View style = {wrapper_1}>
<View style={{flex:3}}>
<Image source ={{url:this.props.navigation.state.params.recipes.image_url}} style={imageStyle}/>
</View>
      </View>
<Text style = {nameStyle}>{this.props.navigation.state.params.recipes.name }</Text>
<View style = {{justifyContent:'space-between',flexDirection:'row'}}>
<View style={wrapper_2}>
<Text style={textStyle}> Category: </Text>
<Text style = {{fontSize:16}}> {this.props.navigation.state.params.recipes.category}</Text>
</View>
<View style ={wrapper_2} >
<Text style={textStyle}> Difficuty: </Text>
<Text style = {{fontSize:16}}> {this.props.navigation.state.params.recipes.difficuty} </Text>
</View>
</View>
<View style = {{justifyContent:'space-between',flexDirection:'row'}}>
<View style={wrapper_2}>
<Text style={textStyle}> Pre-Time: </Text>
<Text style = {{fontSize:16}}>{this.props.navigation.state.params.recipes.preparation_time}</Text>
<Text style={{fontSize:16}}>min</Text>
</View>
<View style ={wrapper_2} >
<Text style={textStyle}> Serving: </Text>
<TouchableOpacity  onPress={() => this.decrServing(this.props.navigation.state.params.recipes.number_of_servings)}>
<Text style={textStyle}> - </Text>
</TouchableOpacity>
<Text style = {{fontSize:16}}> {this.props.navigation.state.params.recipes.number_of_servings} </Text>
<TouchableOpacity onPress={() => this.incrServing(this.props.navigation.state.params.recipes.number_of_servings)}>
<Text style={textStyle}> + </Text>
</TouchableOpacity>
</View>
</View>
<View style ={wrapper_2} >
<Text style={textStyle}> Ingredients </Text>
</View>
<View>
{this.props.navigation.state.params.recipes.ingredients.map((ingredient) => {
  return (
    <View style={_wrapper}>
    <Text>- {ingredient.name}:</Text>
    <Text style={{paddingHorizontal:5}}>{ingredient.number_of_units*this.props.navigation.state.params.recipes.number_of_servings}</Text>
    <Text >{ingredient.units_of_measurement}</Text>
    </View>
  );
})}
</View>
  <TouchableOpacity style = {buttonContainer}
  onPress = { this.addThisIngredientToShopping.bind(this,this.props.navigation.state.params.recipes)}
  >
<Text style ={button}> Add to Shopping List </Text>
</TouchableOpacity>
<View style ={wrapper_2}>
<Text style={textStyle}> How-to </Text>
</View>
<View>
<Text style={{margin:10}}>{this.props.navigation.state.params.recipes.description}</Text>
</View>
</ScrollView>

    );
  }
}
const imageWidth = width;
const imageHeight = height/2.7 ;

const styles = StyleSheet.create({
  wrapper_1: {height: height/2.7,
  backgroundColor: '#FFFFFF',

  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
  },
   nameStyle: {
      paddingTop: 20,
      paddingBottom: 30,
      fontSize:18,
      color: '#95989A',
      textAlign:'center',

    },
    wrapper_2: {
      margin: 10,
      flexDirection:'row',

    },
    _wrapper:{
      margin: 10,
      flexDirection:'row',
      justifyContent:'flex-start',
    },


    textStyle: {
      fontSize:16,
      color: '#95989A',
    },
    button: {
      textAlign:'center',
      color: "#FFFFFF",
      fontSize: 16,
      fontFamily: 'Helvetica Neue',
    },
    buttonContainer: {
      height: 40,
      width :180,
      borderRadius :6,
      backgroundColor :"#FFC0CB",
      marginLeft: 180,
      marginTop: 15,
      paddingVertical: 10,

    },
});
