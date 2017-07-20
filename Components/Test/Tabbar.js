import React, {Component} from 'react';
import { View,Text, TouchableOpacity,Image ,StyleSheet} from 'react-native';
import Login from "/Users/quynhngan/KitDream/Components/Test/Login/Login.js";
import KitLogo from "/Users/quynhngan/KitDream/Components/Test/Home/Kitlogo.js";
import Search from "/Users/quynhngan/KitDream/Components/Test/Search.js";
import ShoppingList from "/Users/quynhngan/KitDream/Components/Test/ShoppingList.js";
import profile from "/Users/quynhngan/KitDream/image/appicon/profile.png";
import profile_1 from "/Users/quynhngan/KitDream/image/appicon/profile_1.png";
import recipe from "/Users/quynhngan/KitDream/image/appicon/recipe.png";
import recipe_1 from "/Users/quynhngan/KitDream/image/appicon/recipe_1.png";
import search from "/Users/quynhngan/KitDream/image/appicon/search.png";
import search_1 from "/Users/quynhngan/KitDream/image/appicon/search_1.png";
import shopping from "/Users/quynhngan/KitDream/image/appicon/shopping.png";
import shopping_1 from "/Users/quynhngan/KitDream/image/appicon/shopping_1.png";
import TabNavigator from 'react-native-tab-navigator';
export default class Tabbar extends Component {
  constructor(props){
    super(props);
    this.state = {selectedTab: 'Kitlogo'};
  }

  render(){
    const {iconStyle} = styles;
    return (
      <View style = {{flex: 1}}>
      <TabNavigator>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'Kitlogo'}
    title="Recipe"
    renderIcon={() => <Image source={recipe} style={iconStyle} />}
    renderSelectedIcon={() => <Image source={recipe_1} style={iconStyle}/>}
    selectedTitleStyle ={{color:"#FFC0CB", fontFamily:"Helvetica Neue"}}
    onPress={() => this.setState({ selectedTab: 'Kitlogo' })}>
    <KitLogo/>
  </TabNavigator.Item>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'Search'}
    title="Search"
    renderIcon={() => <Image source={search} style={iconStyle} />}
    renderSelectedIcon={() => <Image source={search_1} style={iconStyle} />}
      selectedTitleStyle ={{color:"#FFC0CB", fontFamily:"Helvetica Neue"}}
    onPress={() => this.setState({ selectedTab: 'Search' })}>
    <Search/>
  </TabNavigator.Item>

  <TabNavigator.Item
    selected={this.state.selectedTab === 'ShoppingList'}
    title="Shopping"
    renderIcon={() => <Image source={shopping} style={iconStyle} />}
    renderSelectedIcon={() => <Image source={shopping_1} style={iconStyle} />}
      selectedTitleStyle ={{color:"#FFC0CB", fontFamily:"Helvetica Neue"}}
    onPress={() => this.setState({ selectedTab: 'ShoppingList' })}>
    <ShoppingList/>

  </TabNavigator.Item>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'Login'}
    title="Profile"
    renderIcon={() => <Image source={profile} style={iconStyle} />}
    renderSelectedIcon={() => <Image source={profile_1} style={iconStyle} />}
      selectedTitleStyle ={{color:"#FFC0CB", fontFamily:"Helvetica Neue"}}
    onPress={() => this.setState({ selectedTab: 'Login' })}>
    <Login/>
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
