import React, { Component } from "react";
import { View, TouchableOpacity, Text, Button, Image } from "react-native";
import Profile from "./Profile";
export default class Home extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: <Image source={require('../../logo.png')} style={{width: 50, height: 50}}/>,
        headerRight: <TouchableOpacity><Text style={{color: "blue"}}>Next </Text></TouchableOpacity>,
        headerLeft: <TouchableOpacity onPress={() => navigation.navigate('DrawerToggle')}>
                        <Image style={{width: 20, height: 20, marginLeft: 10}} source={require('../../menu.png')} />
                    </TouchableOpacity>
        
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