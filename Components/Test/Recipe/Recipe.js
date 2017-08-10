
import React,{Component} from 'react';
import{ View, ScrollView, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ActivityIndicator, TouchableHighlight} from 'react-native';
import Header from "./Header";
import food from "/Users/quynhngan/KitDream/image/food.jpg";
import food_2 from "/Users/quynhngan/KitDream/image/food_2.jpg";
import food_3 from "/Users/quynhngan/KitDream/image/food_3.jpg";
import chef_3 from "/Users/quynhngan/KitDream/image/chef_3.png";
const {height,width} = Dimensions.get('window');
export default class Recipe extends Component{
  static navigationOptions = {header:null}
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
      cart:[]
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

    const {wrapper,nameStyle,imageStyle,_wrapper,iconStyle,textStyle} = styles;
    const {cart} =this.state

    return(
      <ScrollView style = {{flex:1, backgroundColor:'#FFF6F7'}}>
      <View style={{height:height/10}}>
        <View style = {_wrapper}>
        <Image source ={chef_3} style = {iconStyle}/>
        <TouchableOpacity
       onPress={()=>{this.props.navigation.navigate('FilterRecipe')}}
        >
        <Text style = {textStyle}> Filter </Text>
        </TouchableOpacity>
        </View>
      </View>

      {this.state.recipes.map((r) => {
        return (

          <View style= {wrapper} key= {r.id}>
            <View style={{flex:3}}>
            <TouchableOpacity
             key = {r.id}
            onPress={()=>{this.props.navigation.navigate('RecipeDetail',{r})}}>
            <Image source ={{url:r.image_url}} style={imageStyle}/>
            </TouchableOpacity>
            </View>
            <View style = {{flex:1}}>
            <Text style ={nameStyle}> {r.name} </Text>
            </View>
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
  },
   _wrapper: {
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
    textStyle: {
      marginLeft: 120,
      color: 'white',
      fontSize: 15
    }

});
