import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, NavigatorIOS, SafeAreaView} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import {Select_Window} from "../Screens/Select_Window";

type Props = {};
export class Home_Screen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> Choose day </Text>
                <View style={styles.button}>
                    <Button
                        onPress={this._onPressButton}
                        title="Monday"
                        color="white"
                    />
                    <Button
                        onPress={this._onPressButton}
                        title="Tueday"
                        color="white"
                    />
                    <Button
                        onPress={this._onPressButton}
                        title="Wednesday"
                        color="white"
                    />
                    <Button
                        onPress={this._onPressButton}
                        title="Thursday"
                        color="white"
                    />
                    <Button
                        onPress={this._onPressButton}
                        title="Friday"
                        color="white"
                    />
                </View>
                <Text style={styles.copyright}> Massimo Fazari </Text>
                <Text style={styles.copyright}> 2018 </Text>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#293656',
    },
    welcome: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
        color: 'white',
    },
    button: {
        color: 'white',
    },
    copyright: {
        position: 'absolute',
        bottom: 0,
        fontSize: 10,
        paddingBottom: 40,
textAlign: 'center',
    color: 'grey',
},
});



/*
const TabNavigator = createBottomTabNavigator({
    Home_Screen: Home_Screen,
    Select_Window: Select_Window
});


export const appcontainer = createAppContainer (TabNavigator);


*/
