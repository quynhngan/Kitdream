/* @flow */

import React, { Component } from 'react';
import { View,Text, StyleSheet,ScrollView, ListView } from 'react-native';

export default class DemoListView extends Component {
  constructor (props){
    super(props);
    data = ['item1', 'item2','item3'];
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data)
    }
  }
  _renderRow(data){
    return(
      <View>
      <Text style ={styles.title}>{data}</Text>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
      <ListView
      dataSource={this.state.dataSource}
      renderRow={this._renderRow.bind(this)}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:30,

  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight : 'bold',
    fontFamily : 'Noteworthy',
  }
});
