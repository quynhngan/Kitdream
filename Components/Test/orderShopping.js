import React, {Component} from 'react';
import { View, Text} from 'react-native';
import {ShoppingStack} from './Router';
export default class orderShopping extends Component {
  render(){
    return (
      <ShoppingStack {...this.props}/>
    );
  }
}
