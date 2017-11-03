import React, { Component } from "react";
import { View, Image, Text } from "react-native";

class ViewImage extends Component {
    render () {
        return (
            <View>
                <Image source = {{
                    uri:
                    'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'
                }}
                style = {{ width: 200, height: 200 }}
                />
            </View>
        )
    }
}

export default ViewImage;