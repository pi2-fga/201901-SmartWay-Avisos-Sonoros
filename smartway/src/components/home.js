import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import io from 'socket.io-client';
import iconMap from '../assets/images/map.png';
import iconQRCode from '../assets/images/qrleitor.png';
import iconFavorite from '../assets/images/fav.png';
import iconBattery from '../assets/images/bateria.png';
import iconCrosswalk from '../assets/images/crosswalk.png';

export default class Home extends Component {
    componentDidMount() {
      this.socket = io('http://18.228.137.154:5000', {transports: ['websocket']});
      this.socket.on('connect', () => console.warn("Bengala conectada"))
      this.socket.on('mobile', (message) => {
        console.warn(message);
      })
    }

    static navigationOptions = {
        title: "SmartWay"
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.containerIcon}>
                    <TouchableOpacity style={styles.icon} onPress={() => navigate('Map')}>
                        <Image source={iconMap} style={styles.image} />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerIcon}>
                    <TouchableOpacity style={styles.icon} onPress={() => navigate('Favorites')}>
                        <Image source={iconFavorite} style={styles.image} />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerIcon}>
                    <TouchableOpacity style={styles.icon} onPress={() => navigate('QRCode')}>
                        <Image source={iconQRCode} style={styles.image} />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerIcon}>
                    <TouchableOpacity style={styles.icon} onPress={() => navigate('BusLine')}>
                        <Image source={iconBattery} style={styles.image} />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerIcon}>
                    <TouchableOpacity style={styles.icon} onPress={() => navigate('Crosswalk')}>
                        <Image source={iconCrosswalk} style={styles.image} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }            
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', 
        backgroundColor: '#fff',        
    },

    containerIcon: {
        // flex: 1,
        // backgroundColor: 'transparent',
        // padding: 20
        
    },

    icon: {
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        padding: 10,
    },

    image: {
        width: 90, 
        height: 90,
    },


});    


