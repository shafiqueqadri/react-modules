import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Camera} from 'react-native-camera';

class CameraTesting extends Component {
    takePicture = () => {
        const options = {};
        this.camera.capture({ metadata: options })
        .then((data) => console.log(data))
        .catch(err => console.error(err));
    }
    render() {
        return (
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
                    this.camera = cam;
                }}
                style = {styles.preview}
                aspect = {Camera.constants.Aspect.fill}>
                </Camera>
                <Text style={styles.capture} onPress={this.takePicture}>CAPTURE</Text>
            </View >
        );
    }
}
export default CameraTesting

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        fontSize: 30,
        color: 'red',
        alignSelf: 'center',
    }
});