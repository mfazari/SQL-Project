import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import {meal_Friday_1, meal_Friday_2} from "./Meals";

export class Selection extends Component {
    render() {
        return (
            <TabNavigator5/>
        );
    }
}


export const TabNavigator5 = createBottomTabNavigator({
            One: meal_Friday_1,
            Two: meal_Friday_2,
        },
        {
            tabBarOptions: {
                activeTintColor: 'blue',
                inactiveTintColor: 'gray'
            },
        }
    );

