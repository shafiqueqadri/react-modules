import React, { Component } from 'react'
import { View, Text } from 'react-native'

class HttpExample extends Component {
    state = {
        data: 'Shafique'
    }
    componentDidMount = () => {
        fetch('https://requestb.in/y2mv8qy2', {
            method: 'POST',
            body: JSON.stringify({name: "Shafique"})
        })
            .then((response) => response._bodyText)
            .then((responseJson) => {
                console.log(responseJson);
            
                this.setState({
                    data: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        return (
            <View>
                <Text>
                    { this.state.data }
                </Text>
            </View>
        )
    }
}
export default HttpExample