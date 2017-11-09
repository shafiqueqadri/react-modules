import React, { Component } from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, TouchableOpacity, Text, Button, Image, StyleSheet } from "react-native";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import FAQ from "./pages/FAQ";

const DrawerStack = DrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            drawerLabel: 'Home',
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            drawerLabel: 'About',
            headerTitle: "About"
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            drawerLabel: 'Profile',
            headerTitle: "Profile"
        }
    },
});

const AllRoutes = StackNavigator({
    Home: {
        screen: DrawerStack
    },
    FAQ: {screen: FAQ},
})

export default AllRoutes;