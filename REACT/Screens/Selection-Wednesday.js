import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import {meal_Wednesday_1, meal_Wednesday_2} from "./Meals";

export class Selection extends Component {
    render() {
        return (
            <TabNavigator3/>
        );
    }
}


export const TabNavigator3 = createBottomTabNavigator({
            One: meal_Wednesday_1,
            Two: meal_Wednesday_2,
        },
        {
            tabBarOptions: {
                activeTintColor: 'blue',
                inactiveTintColor: 'gray'
            },
        }
    );

