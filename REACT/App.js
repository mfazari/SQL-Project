import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, NavigatorIOS, SafeAreaView} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {TabNavigator} from "./Screens/Select_Window";

type Props = {};
class Home_Screen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> Choose day </Text>
                <View style={styles.button}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Selection')}
                        title="Monday"
                        color="white"
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('Selection')}                        title="Tueday"
                        color="white"
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('Selection')}
                        title="Wednesday"
                        color="white"
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('Selection')}
                        title="Thursday"
                        color="white"
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('Selection')}
                        title="Friday"
                        color="white"
                    />
                </View>
                <Text style={styles.copyright}> Massimo Fazari 2018 </Text>
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




//Link to other screens
const MyNavigator = createStackNavigator(
    {
        Home: Home_Screen,
        Selection: TabNavigator
    },
    {
        // headerTransitionPreset: 'uikit',
        mode: 'modal',
        initialRouteName: 'Home',
    }
);



export default MyNavigator;
