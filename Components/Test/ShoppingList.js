/* @flow */

import React, { Component } from 'react';
import { View,Text, StyleSheet,ScrollView, ListView,Dimensions } from 'react-native';
import chef_3 from "/Users/quynhngan/KitDream/image/chef_3.png";
const { height} = Dimensions.get ('window');
export default class ShoppingList extends Component {
  constructor (props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1,r2)=>r1 !== r2})

    }
  }

  render() {
    return (
      <View>
      <View style={styles.container}>
      <ListView
      dataSource={this.state.dataSource}
      renderRow={()=>
        <Text> abc </Text>
      }
      />
      </View>
      </View>
    );
  }
  componentDidMount(){
    var array = ["i1","item2","item3"]
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(array),
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:30,

  },
  iconStyle:{
    width: 32,
    height: 32,
  },
  wrapper: {
    height: height/10,
    backgroundColor:"#FFC0CB",
      justifyContent: 'center',
        alignItems: 'center',
  paddingTop: 20,
  },
});
