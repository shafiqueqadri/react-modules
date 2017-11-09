import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import FAQ from "./FAQ";
export default class About extends Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                <TouchableOpacity onPress={() => navigate('FAQ')}>
                    <Text>Go back to FAQ</Text>
                </TouchableOpacity>
            </View>
        )
    }
}