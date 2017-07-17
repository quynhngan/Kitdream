import React, {Component} from 'react';
import { View, Text} from 'react-native';
import {HomeStack} from './Router';

export default class Home extends Component {
  render(){
    return (
        <HomeStack/>
    );
  }
}
