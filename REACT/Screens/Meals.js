import React, {Component} from 'react';
import {View, ScrollView, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';


var text;

//Meal 1
export class meal_1 extends Component {
    componentWillMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch("http://localhost:3000/Monday/2");
        const json = await response.json();
        this.setState({ data: json[0]});
        text = JSON.stringify(json);
        text = text.replace('[{\"Description\":\"','');
        text = text.replace('\"}]','');
    };
    render() {
        return (
            <View style ={style2.mealView}>
                <View style ={style2.box}>
                <Text style={style2.menu}>
                    {text}
                </Text>
                </View>
            </View>
        );
    }
};


//Meal 2
export class meal_2 extends Component {
    componentWillMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch("http://localhost:3000/Monday/2");
        const json = await response.json();
        this.setState({ data: json[0]});
        text = JSON.stringify(json);
        text = text.replace('[{\"Description\":\"','');
        text = text.replace('\"}]','');
    };
    render() {
        return (
            <View style ={style2.mealView}>
                <View style ={style2.box}>
                    <Text style={style2.menu}>
                        {text}
                    </Text>
                </View>
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
        color: 'black',
        margin: 40
    },
    box: {
        borderRadius: 10,
        backgroundColor: 'white',
    }
});
