import React, {Component} from 'react';
import {View, ScrollView, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';


var text;

//Meal 1
export class meal_1 extends Component {
    state = {
        data: []
    };
    componentWillMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch("http://localhost:3000/Monday/2");
        const json = await response.json();
        this.setState({ data: json[0]});
        text = JSON.stringify(json);

    };
    render() {
        return (
            <View style ={style2.mealView}>
                <Text style={style2.menu}>
                    {text}
                </Text>
            </View>
        );
    }
};


//Meal 2
export class meal_2 extends Component {
    state = {
        data: []
    };
    componentWillMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch("http://localhost:3000/Monday/2");
        const json = await response.json();
        this.setState({ data: json[0]});
        text = JSON.stringify(json);

    };
    render() {
        return (
            <View style ={style2.mealView}>
                <Text style={style2.menu}>
                    {text}
                </Text>
            </View>
        );
    }
};


const style2 = StyleSheet.create({
    mealView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#293656',
    },
    menu: {
        fontSize: 30,
        fontFamily: 'System',
        color: 'white',
        margin: 40
    }
});
