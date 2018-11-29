import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

export class meal_1 extends Component {
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Meal 1</Text>
            </SafeAreaView>
        );
    }
}


export class meal_2 extends Component {
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Meal 2</Text>
            </SafeAreaView>
        );
    }
}
