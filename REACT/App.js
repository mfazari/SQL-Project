import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {TabNavigator2} from "./Screens/Selection-Tuesday";
import {TabNavigator3} from "./Screens/Selection-Wednesday";
import {TabNavigator4} from "./Screens/Selection-Thursday";
import {TabNavigator5} from "./Screens/Selection-Friday";
import {TabNavigator1} from "./Screens/Selection-Monday";


var day;
var number;



type Props = {};
class Home_Screen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> Choose day </Text>
                <View style={styles.button}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Monday')}
                        title="Monday"
                        color="white"
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('Tuesday')}
                        title="Tueday"
                        color="white"
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('Wednesday')}
                        title="Wednesday"
                        color="white"
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('Thursday')}
                        title="Thursday"
                        color="white"
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('Friday')}
                        title="Friday"
                        color="white"
                    />
                </View>
                <Text style={styles.copyright}> Massimo Fazari 2018 </Text>
            </View>

        );
    }
}




//Stylesheet
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
    }
});




//Link to other screens
const MyNavigator = createStackNavigator(
    {
        Home: Home_Screen,
        Monday: TabNavigator1,
        Tuesday: TabNavigator2,
        Wednesday: TabNavigator3,
        Thursday: TabNavigator4,
        Friday: TabNavigator5
    },
    {
        //settings
        initialRouteName: 'Home',

        navigationOptions: {
            headerStyle:{backgroundColor:'#293656'},
            headerTintColor:'white',
            gesturesEnabled:true
        },
        cardStyle: {
            backgroundColor: 'white'
        }}
);


export default MyNavigator;
