'use strict';

import React, { Component } from 'react';
import { AppRegistry, Text, ScrollView, View, StyleSheet, Image } from 'react-native';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

class HelloWorldApp extends Component {
    render() {
        return (
                <View style={{flex: 1}}>
                
                
                <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'flex-end'
                }}>
                
                <View style={styles.home_icon}>
                <Image
                source={require('./home_bar_icons/home.png')}
                style={styles.home_pic}
                />
                </View>
                
                <View style={styles.home_icon}>
                <Image
                source={require('./home_bar_icons/magnifying_glass.png')}
                style={styles.home_pic}
                />
                </View>
                
                <View style={styles.home_icon}>
                <Image
                source={require('./home_bar_icons/social.png')}
                style={styles.home_pic}
                />
                </View>
                
                <View style={styles.home_icon}>
                <Image
                source={require('./home_bar_icons/news.png')}
                style={styles.home_pic}
                />
                </View>
                </View>
                
                </View>
                );
    }
}

const styles = StyleSheet.create({
                                 banner: {
                                 width: window.width,
                                 height: 100,
                                 backgroundColor: 'navy'
                                 },
                                 
                                 banner_font: {
                                 fontSize: 40,
                                 fontWeight: 'bold',
                                 textAlign: 'center',
                                 marginTop: 0,
                                 paddingTop: 30,
                                 paddingBottom: 30,
                                 color: 'gold'
                                 },
                                 
                                 sport_icon: {
                                 width: window.width/3,
                                 height: window.width/3,
                                 backgroundColor: 'white',
                                 borderColor: 'gainsboro',
                                 borderStyle: 'solid',
                                 borderWidth: 0.5,
                                 borderRightWidth: 0,
                                 borderTopWidth: 0,
                                 flexDirection: 'column',
                                 justifyContent: 'center',
                                 alignItems: 'center',
                                 },
                                 
                                 sport_title: {
                                 fontSize: 18,
                                 textAlign: 'center',
                                 },
                                 
                                 sport_pic: {
                                 width: window.width/3 - 50,
                                 height: window.width/3 - 50,
                                 alignSelf: 'center',
                                 },
                                 
                                 home_icon: {
                                 width: window.width/4,
                                 height: window.width/4 - 45,
                                 backgroundColor: 'white',
                                 borderColor: 'gainsboro',
                                 borderTopWidth: 0.5,
                                 borderRightWidth: 0,
                                 borderLeftWidth: 0,
                                 borderBottomWidth: 0,
                                 justifyContent: 'center'
                                 },
                                 
                                 home_pic: {
                                 width: window.width/4 - 60,
                                 height: window.width/4 - 60,
                                 alignSelf: 'center'
                                 }
                                 });

AppRegistry.registerComponent('FirstProject', () => HelloWorldApp);
