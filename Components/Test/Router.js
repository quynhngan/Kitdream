import React from 'react';
import {StackNavigator} from 'react-navigation';
import Recipe from '/Users/quynhngan/KitDream/Components/Test/Recipe/Recipe.js';
import RecipeDetail from '/Users/quynhngan/KitDream/Components/Test/Recipe/RecipeDetail.js';
import SignupForm from '/Users/quynhngan/KitDream/Components/Test/Login/SignupForm.js';
import LoginForm from '/Users/quynhngan/KitDream/Components/Test/Login/LoginForm.js'
import ProfileDetail from '/Users/quynhngan/KitDream/Components/Test/Login/ProfileDetail.js'
import Search from '/Users/quynhngan/KitDream/Components/Test/Search/Search.js';
import FilterRecipe from '/Users/quynhngan/KitDream/Components/Test/Recipe/FilterRecipe.js';

 export const HomeStack = StackNavigator({
   Recipe: {
     screen: Recipe,
   },
   RecipeDetail: {
     screen: RecipeDetail,
   },
   FilterRecipe:{
     screen: FilterRecipe,
   }
   }
 );
export const ProfileStack = StackNavigator({
  LoginForm: {
    screen: LoginForm,
  },
  SignupForm:{
    screen: SignupForm,
  },
  ProfileDetail: {
  screen: ProfileDetail,
},
});
export const FilterStack = StackNavigator({
  Search: {
    screen: Search,
  },
  Recipe:{
    screen: Recipe,
  },
});
