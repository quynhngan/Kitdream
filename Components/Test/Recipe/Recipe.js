import React,{Component} from 'react';
import{ View, ScrollView, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ActivityIndicator} from 'react-native';
import Header from "./Header";
import food from "/Users/quynhngan/KitDream/image/food.jpg";
import food_2 from "/Users/quynhngan/KitDream/image/food_2.jpg";
import food_3 from "/Users/quynhngan/KitDream/image/food_3.jpg";

const {height,width} = Dimensions.get('window');
export default class Recipe extends Component{
  static navigationOptions = {header:null}
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {
    return fetch('http://localhost:4000/recipes')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          recipes: responseJson
        }, function() {
          // do something with new stat
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render(){
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    const {wrapper,nameStyle,imageStyle} = styles;

    return(
      <ScrollView style = {{flex:1, backgroundColor:'#FFF6F7'}}>
      <Header/>

      {this.state.recipes.map((recipe) => {
        return (
          <View>
          <TouchableOpacity
          onPress={()=>{this.props.navigation.navigate('RecipeDetail')}}>

          <View style = {wrapper}>
            <View style={{flex:3}}>

            <Image source ={{url:recipe.image_url}} style={imageStyle}/>
            </View>


            <View style = {{flex:1}}>
            <Text style ={nameStyle}> {recipe.name} </Text>
            </View>
          </View>
          </TouchableOpacity>
          </View>
        )
      })}
      </ScrollView>
    );
  }
}
const imageWidth = width -30;
const imageHeight = height/2.5-80 ;
const styles = StyleSheet.create({
  wrapper: {
    height: height/2.7,
    backgroundColor: '#FFFFFF',
    margin: 15,
    shadowColor: "#2E272B",
    shadowOffset: {width: 0,height:3},
    shadowOpacity: 0.5
  },
  nameStyle: {
    paddingTop: 15,
    paddingLeft: 15,
    fontSize:14,
    color: '#95989A',
    justifyContent:'center',
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
  }

});
