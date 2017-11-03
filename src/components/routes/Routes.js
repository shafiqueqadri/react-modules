import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from '../home/Home.js'
import About from '../about/About.js'

const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="home" component={Home} title="Home" initial={true} />
            <Scene key="about" component={About} title="About" />
        </Scene>
    </Router>
)
export default Routes