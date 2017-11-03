
import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'


class About extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    goToHome() {
        Actions.home()
    }
    render() {
        return (
            <TouchableOpacity style={{ margin: 128 }} onPress={() => this.goToHome()}>
                <Text>This is ABOUT</Text>
            </TouchableOpacity>
        )
    }
}
export default About