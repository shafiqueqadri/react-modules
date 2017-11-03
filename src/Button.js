import React from 'react'
import { TouchableOpacity, Button, TouchableNativeFeedback, TouchableHighlight, StyleSheet, View, Text } from 'react-native'

const OpacityButton = () => {
   return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.text}>
                    Button
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        borderWidth: 1,
        padding: 25,
        borderColor: 'black',
        backgroundColor: 'red'
    }
})

//Button View

const ViewButton = () => {
   const handlePress = () => false
   return (
        <Button
            onPress={handlePress}
            title="Red button!"
            color="red"
        />
    )
}

// TouchableHighlight
const TouchableHighlightButton = (props) => {
   return (
        <View style={styles.container}>
            <TouchableHighlight>
                <Text style={styles.text}>
                    Button
                </Text>
            </TouchableHighlight>
        </View>
    )
}

const TouchableNativeFeedbackButton = (props) => {
   return (
    <View style={styles.container}>
        <TouchableNativeFeedback>
            <Text style={styles.text}>
                Button
            </Text>
        </TouchableNativeFeedback>
    </View>
)
}

module.exports = {
    ViewButton: ViewButton,
    OpacityButton: OpacityButton,
    TouchableHighlightButton: TouchableHighlightButton,
    TouchableNativeFeedbackButton: TouchableNativeFeedbackButton
}
