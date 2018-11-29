import React from 'react';

import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {Home_Screen} from './Home_Screen';
import {Select_Window} from '../Screens/Select_Window';
import {Menu_2} from '../Screens/meals';


export const Window = createBottomTabNavigator({
    Home_Screen: {screen: Home_Screen},
    Menu_1: {screen: Select_Window},
    Menu_2: {screen: Menu_2}
});
