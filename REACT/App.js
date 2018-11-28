/**
 * React native Meal app
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, NavigatorIOS} from 'react-native';
import {Home_Screen} from "./Screens/Home_Screen";


const App = () => (
    <View style={{
        flex: 1,
        backgroundColor: '#293656'
    }}>
        <Home_Screen/>
    </View>
);

export default App;



