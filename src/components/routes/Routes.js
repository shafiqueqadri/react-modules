import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { StyleSheet, View, Text } from "react-native";
import Home from '../home/Home.js'
import About from '../about/About.js'

class Routes extends React.Component {
    constructor(props) {
        super(props)
    }
    Welcome(props) {
        return (
            <Text>
                {this.props.menu.name}
            </Text>
        )
    }
    render() {
        return (
            <Router navigationBarStyle={{ backgroundColor: '#1e2226' }} titleStyle={{ color: "#FFF" }}>
                <Scene key="root">
                    <Scene key="home" path="/home" component={Home} title="Home" initial={true} titleStyle={{ color: "#FFF" }} />
                    <Scene key="about" component={About} title="About" />
                </Scene>
            </Router>
        )
        
    }
    
}


export default Routes