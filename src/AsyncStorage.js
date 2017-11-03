import React, { Component } from 'react'
import { AsyncStorage, Text, View, TextInput, StyleSheet } from 'react-native'

class AsyncStorageExample extends Component {
    state = {
        'name': 'Hello'
    }

    componentDidMount = () => AsyncStorage.getItem('name').then((value) => {
        this.setState({ 'name': value })
    })

    setName = (value) => {
        AsyncStorage.setItem('name', value);
        this.setState({ 'name': value });
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput} autoCapitalize='none'
                    onChangeText={this.setName} />
                <Text>
                    {this.state.name}
                </Text>
            </View>
        )
    }
}
export default AsyncStorageExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    textInput: {
        margin: 15,
        height: 35,
        borderWidth: 1,
        backgroundColor: '#7685ed'
    }
})