import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import {meal_1, meal_2} from "./meals";

export class Select_Window extends Component {
    render() {
        return (
            <TabNavigator/>

        );
    }
}


const TabNavigator = createBottomTabNavigator({
    Menu_1: meal_1,
    Menu_2: meal_2
});



