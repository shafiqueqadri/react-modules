import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import About from "./About";
export default class Profile extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.navigation.state)
    }
    render() {
        const { navigate } = this.props.navigation
        const { params } = this.props.navigation.state
        return (
            <View>
                <TouchableOpacity onPress={() => navigate('About')}>
                    <Text>Go back to About</Text>
                </TouchableOpacity>
            </View>
        )
    }
}