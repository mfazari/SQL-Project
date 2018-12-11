import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import {meal_Monday_1, meal_Monday_2} from "./Meals";

export class Selection extends Component {
    render() {
        return (
            <TabNavigator1/>
        );
    }
}


export const TabNavigator1 = createBottomTabNavigator({
            One: meal_Monday_1,
            Two: meal_Monday_2,
        },
        {
            tabBarOptions: {
                activeTintColor: 'blue',
                inactiveTintColor: 'gray'
            },
        }
    );

