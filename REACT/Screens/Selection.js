import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import {meal_1, meal_2} from "./Meals";

export class Selection extends Component {
    render() {
        return (
            <TabNavigator/>
        );
    }
}


export const TabNavigator = createBottomTabNavigator({
    Menu_1: meal_1,
    Menu_2: meal_2
},


);



