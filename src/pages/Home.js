import React, { Component } from "react";
import { View, TouchableOpacity, Text, Button } from "react-native";
import Profile from "./Profile";
export default class Home extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Home Page',
        headerRight: <TouchableOpacity><Text style={{color: "blue"}}>Next </Text></TouchableOpacity>,
        headerLeft: <TouchableOpacity onPress={() => navigation.navigate('DrawerToggle')}><Text>Menu</Text></TouchableOpacity>
        
    });
    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                <TouchableOpacity onPress={ () => navigate('Profile', {id: "Shafique"})}>
                    <Text>Go back to Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('DrawerToggle')}>
                    <Text>Go back to Profile</Text>
                </TouchableOpacity>
            </View>
        )
    }
}