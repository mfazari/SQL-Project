import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import {meal_Thursday_1, meal_Thursday_2} from "./Meals";

export class Selection extends Component {
    render() {
        return (
            <TabNavigator4/>
        );
    }
}


export const TabNavigator4 = createBottomTabNavigator({
            One: meal_Thursday_1,
            Two: meal_Thursday_2,
        },
        {
            tabBarOptions: {
                activeTintColor: 'blue',
                inactiveTintColor: 'gray'
            },
        }
    );

