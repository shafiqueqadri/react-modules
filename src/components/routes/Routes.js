import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { StyleSheet } from "react-native";
import Home from '../home/Home.js'
import About from '../about/About.js'

const Routes = () => (
    <Router navigationBarStyle={{ backgroundColor: '#1e2226' }} titleStyle={{ color: "#FFF" }}>
        <Scene key="root">
            <Scene key="home" component={Home} title="Home" initial={true}  titleStyle={{ color: "#FFF" }}/>
            <Scene key="about" component={About} title="About" />
        </Scene>
    </Router>
)


export default Routes