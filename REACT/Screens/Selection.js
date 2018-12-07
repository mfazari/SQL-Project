import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
            Home: meal_1,
            Settings: meal_2,
        },
        {
            defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    const { routeName } = navigation.state;
                    let iconName;
                    if (routeName === 'Home') {
                        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    } else if (routeName === 'Settings') {
                        iconName = `ios-options${focused ? '' : '-outline'}`;
                    }

                    // You can return any component that you like here! We usually use an
                    // icon component from react-native-vector-icons
                    return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
                },
            }),
            tabBarOptions: {
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            },
        }
    );

