import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

import phoneIcon from "/Users/quynhngan/KitDream/image/phoneIcon.png";
import mailIcon from  "/Users/quynhngan/KitDream/image/mailIcon.png";
import locationIcon from  "/Users/quynhngan/KitDream/image/locationIcon.png";
export default class Contact extends Component {
  static navigationOptions = {headerTintColor:"white",headerStyle: {
           backgroundColor:"#FFC0CB"} }
    render() {
        const {
            mapContainer, wrapper, infoContainer,
            rowInfoContainer, imageStyle, infoText
        } = styles;
        return (
            <View style={wrapper}>
                <View style={mapContainer}>
                    <MapView
                        style={{ width: width - 20, height: 250 }}
                        initialRegion={{
                            latitude: 10.844506,
                            longitude: 106.656188,
                            latitudeDelta: 0.0322,
                            longitudeDelta: 0.0321,
                        }}
                    >
                        <MapView.Marker
                            coordinate={{ latitude: 10.844506, longitude: 106.656188 }}
                            title="Hello"
                            description="KitDream"
                        />
                    </MapView>
                </View>
                <View style={infoContainer}>
                    <View style={rowInfoContainer}>
                        <Image source={locationIcon} />
                        <Text style={infoText}>115 Cay Tram,Go Vap,Ho Chi Minh City</Text>
                    </View>
                    <View style={rowInfoContainer}>
                        <Image source={phoneIcon} />
                        <Text style={infoText}>0982.339.400</Text>
                    </View>
                    <View style={rowInfoContainer}>
                        <Image source={mailIcon} />
                        <Text style={infoText}>contact@kitdream.com</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#F6F6F6' },
    mapStyle: {
        width: width - 40,
        height: 230,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 10,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    infoContainer: {
        padding: 10,
        flex: 1,
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 10,
        marginBottom:20,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
    },
    rowInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D6D6D6',
        height: 30,
        marginLeft:10,
        marginRight:10,

    },
    imageStyle: {
        width: 2,
        height: 30
    },
    infoText: {

        color: '#AE005E',
        fontWeight: '500'
    }
});
