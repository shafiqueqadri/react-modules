import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Home from "./Home";
export default class FAQ extends Component {
    render () {
        const { navigate } = this.props.navigation
        return (
            <View>
                <TouchableOpacity onPress={() => navigate('Home')}>
                    <Text>Go back to Home</Text>
                </TouchableOpacity>
            </View>
        )
    }
}