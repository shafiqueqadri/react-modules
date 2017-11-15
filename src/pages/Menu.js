import React, { Component } from "react";

export default class MenuButton extends Component {
    constructor (props) {
        super(props)
    }
    _clickMenu () {
        this.props.navigation.navigate('DrawerToggle')
    }
}