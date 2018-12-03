import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';


//Meal 1
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

//Meal 2
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
