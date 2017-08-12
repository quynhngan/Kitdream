import React, {Component} from 'react';
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
export default class Tabbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'Home',
      cart:[]
    };
    global.addIngredientToShopping = this.addIngredientToShopping.bind(this);
    global.setCategory = this.setCategory.bind(this);
    global.setDifficuty = this.setDifficuty.bind(this);
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
  addIngredientToShopping(recipes){
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
    selected={selectedTab === 'Search'}
    title="Search"
    renderIcon={() => <Image source={search} style={iconStyle} />}
    renderSelectedIcon={() => <Image source={search_1} style={iconStyle} />}
      selectedTitleStyle ={{color:"#FFC0CB", fontFamily:"Helvetica Neue"}}
    onPress={() => this.setState({ selectedTab: 'Search' })}>
    <Search/>

  </TabNavigator.Item>
  <TabNavigator.Item
    selected={selectedTab === 'ShoppingList'}
    title="Shopping"
    renderIcon={() => <Image source={shopping} style={iconStyle} />}
    renderSelectedIcon={() => <Image source={shopping_1} style={iconStyle} />}
    badgeText={cart.length}
      selectedTitleStyle ={{color:"#FFC0CB", fontFamily:"Helvetica Neue"}}
    onPress={() => this.setState({ selectedTab: 'ShoppingList' })}>

    <ShoppingList cart = {cart}/>

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
