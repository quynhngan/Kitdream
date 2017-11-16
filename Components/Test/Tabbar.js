import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View,Text, TouchableOpacity,Image ,StyleSheet} from 'react-native';
import Recipe from "/Users/quynhngan/KitDream/Components/Test/Recipe/Recipe.js";
import Search from "/Users/quynhngan/KitDream/Components/Test/Search/Search.js";
import ShoppingList from "/Users/quynhngan/KitDream/Components/Test/Shopping/ShoppingList.js";
import profile from "/Users/quynhngan/KitDream/image/appicon/profile.png";
import profile_1 from "/Users/quynhngan/KitDream/image/appicon/profile_1.png";
import recipe from "/Users/quynhngan/KitDream/image/appicon/recipe.png";
import recipe_1 from "/Users/quynhngan/KitDream/image/appicon/recipe_1.png";
import search from "/Users/quynhngan/KitDream/image/appicon/search.png";
import search_1 from "/Users/quynhngan/KitDream/image/appicon/search_1.png";
import shopping from "/Users/quynhngan/KitDream/image/appicon/shopping.png";
import shopping_1 from "/Users/quynhngan/KitDream/image/appicon/shopping_1.png";
import TabNavigator from 'react-native-tab-navigator';
import Home from '/Users/quynhngan/KitDream/Components/Test/Home.js'
import Profile from '/Users/quynhngan/KitDream/Components/Test/Profile.js'
import Filter from '/Users/quynhngan/KitDream/Components/Test/Search/Filter.js'
import global from '/Users/quynhngan/KitDream/Components/Test/global.js'
import OrderShopping from '/Users/quynhngan/KitDream/Components/Test/orderShopping.js'

export default class Tabbar extends Component {
  static childContextTypes = {
    cart: PropTypes.array
  }
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'Home',
      cart:[]
    };
    global.addRecipeToShopping = this.addRecipeToShopping.bind(this);
    global.emptyCart = this.emptyCart.bind(this);
    global.removeRecipe = this.removeRecipe.bind(this);
    global.incrRecipe = this.incrRecipe.bind(this);
    global.decrRecipe = this.decrRecipe.bind(this);

  }
  emptyCart() {
    this.setState({cart: []})
  }
  componentDidMount() {
   fetch('http://localhost:4000/search')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          recipes: responseJson
        });
      });
      /*getShoppingList()
      .then(cart => this.setState({cart}))
      .catch((error) => {
        console.error(error);
      });*/
  }
  removeRecipe(name) {
       const newCart = this.state.cart.filter(recipes => recipes.name !== name);
       this.setState({ cart: newCart },

       );
   }
   incrRecipe(name) {
       const newCart = this.state.cart.map(recipes => {
           if (recipes.name !== name ) return recipes;
           return { name: recipes.name,image_url: recipes.image_url, number_of_servings: recipes.number_of_servings + 1 };

       });
       this.setState({ cart: newCart },
       );
   }

  decrRecipe(name) {
       const newCart = this.state.cart.map(recipes => {
           if (recipes.name !== name ) return recipes;
           return { name: recipes.name,image_url: recipes.image_url, number_of_servings: recipes.number_of_servings - 1 };
           

       });
       this.setState({ cart: newCart },
       );

   }

  getChildContext() {
    return { cart: this.state.cart }
  }
  addRecipeToShopping(recipes){
    this.setState({cart: this.state.cart.concat(recipes)})
  /*  ()=> saveShoppingList(this.state.cart)*/
  }
  setDifficuty(difficuty) {
    this.setState({difficuty: difficuty})
  }
  setCategory(category) {
    this.setState({category: category})
  }

  render(){
    const {iconStyle} = styles;
    const {types,selectedTab,cart}= this.state
    return (
      <View style = {{flex: 1}}>
      <TabNavigator>
  <TabNavigator.Item
    selected={selectedTab === 'Home'}
    title="Recipe"
    renderIcon={() => <Image source={recipe} style={iconStyle} />}
    renderSelectedIcon={() => <Image source={recipe_1} style={iconStyle}/>}
    selectedTitleStyle ={{color:"#FFC0CB", fontFamily:"Helvetica Neue"}}
    onPress={() => this.setState({ selectedTab: 'Home' })}>
    <Home />
  </TabNavigator.Item>

  <TabNavigator.Item
    selected={selectedTab === 'orderShopping'}
    title="Shopping"
    renderIcon={() => <Image source={shopping} style={iconStyle} />}
    renderSelectedIcon={() => <Image source={shopping_1} style={iconStyle} />}
    badgeText={cart.length}
      selectedTitleStyle ={{color:"#FFC0CB", fontFamily:"Helvetica Neue"}}
    onPress={() => this.setState({ selectedTab: 'orderShopping' })}>
    <OrderShopping screenProps={cart}/>

  </TabNavigator.Item>
  <TabNavigator.Item
    selected={selectedTab === 'Profile'}
    title="Profile"
    renderIcon={() => <Image source={profile} style={iconStyle} />}
    renderSelectedIcon={() => <Image source={profile_1} style={iconStyle} />}
      selectedTitleStyle ={{color:"#FFC0CB", fontFamily:"Helvetica Neue"}}
    onPress={() => this.setState({ selectedTab: 'Profile' })}>
    <Profile/>
  </TabNavigator.Item>
</TabNavigator>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  iconStyle:{
    width: 24,
    height: 24,
  }
}

)
