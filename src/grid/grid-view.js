import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Column as Col, Row } from 'react-native-flexbox-grid';

class GridView extends Component {
    render(){
        return (
            <View style= { styles.container } >
                <Row size={12}>
                    <Col sm={6} md={6} lg={3}>
                        <Text>
                            First Column
                        </Text>
                    </Col>
                    <Col sm={6} md={6} lg={3}>
                        <Text>
                            Second Column
                        </Text>
                    </Col>
                </Row>      
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        marginTop: 50
    }
})
export default GridView