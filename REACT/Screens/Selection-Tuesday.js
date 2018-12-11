import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import {meal_Tuesday_1, meal_Tuesday_2} from "./Meals";

export class Selection extends Component {
    render() {
        return (
            <TabNavigator2/>
        );
    }
}


export const TabNavigator2 = createBottomTabNavigator({
            One: meal_Tuesday_1,
            Two: meal_Tuesday_2,
        },
        {
            tabBarOptions: {
                activeTintColor: 'blue',
                inactiveTintColor: 'gray'
            },
        }
    );

