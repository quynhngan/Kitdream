import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, ScrollView,ActivityIndicator
} from 'react-native';
import getOrder from '/Users/quynhngan/KitDream/Components/Test/Login/getOrder.js'
import global from '/Users/quynhngan/KitDream/Components/Test/global.js'


export default class OrderHistory extends Component {
  static navigationOptions = {headerTintColor:"white",title: "Order History",headerStyle: {
           backgroundColor:"#FFC0CB"} }
    constructor(props) {
        super(props);
        this.state = { orders: [] };
    }
 getOrderHistory(){
      return fetch('http://localhost:4000/orders',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                auth_token: global.currentUser.user_token,
                
            }
        })
        .then(res => res.json())
    }
    componentDidMount() {
      this.getOrderHistory()
      .then(orders => this.setState({orders}))
      .catch((error) => {
        console.error(error);
      })
    }

    render() {
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }
        const { wrapper, header, headerTitle, backIconStyle, body, orderRow } = styles;


        return (
            <View style={wrapper}>
                <View style={body}>
                    <ScrollView>
                       { this.state.orders.map(order => (
                            <View style={orderRow} >
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id: </Text>
                                    <Text style={{ color: '#2ABB9C' }}>{order.id}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                                    <Text style={{ color: '#C21C70' }}>{order.inserted_at}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                                    <Text style={{ color: '#2ABB9C' }}>{order.status}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Price:</Text>
                                    <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>{order.price}</Text>
                                </View>
                            </View>

                        )) }
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' },
    header: { flex: 1, backgroundColor: '#2ABB9C', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
    headerTitle: { fontFamily: 'Avenir', color: '#fff', fontSize: 20 },
    backIconStyle: { width: 30, height: 30 },
    body: { flex: 10, backgroundColor: '#F6F6F6' },
    orderRow: {
        height: width / 3,
        backgroundColor: '#FFF',
        margin: 10,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#DFDFDF',
        shadowOpacity: 0.2,
        padding: 10,
        borderRadius: 2,
        justifyContent: 'space-around'
    }
});
