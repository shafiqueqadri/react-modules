import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, AsyncStorage } from "react-native";
import List from './src/List'
import Inputs from "./src/Inputs";
import ScrollViewExample from "./src/ScrollView";
import ViewImage from "./src/Image";
import HttpExample from './src/HttpExample'
import {ViewButton, OpacityButton, TouchableHighlightButton, TouchableNativeFeedbackButton} from "./src/Button";
import Animations from "./src/Animations";
import DynamicAnimations from "./src/DynamicAnimations";
import Routes from "./src/components/routes/Routes";
import WebViewExample from "./src/WebViewExample";
import ModelExample from "./src/ModelExample";
import ActivityIndicatorExample from "./src/ActivityIndicator";
import Picker from "./src/Picker";
import StatusBarChecking from "./src/Statusbar";
import AlertExample from "./src/AlertExample";
import AsyncGeolocation from "./src/ASyncGeoLocation";
import AsyncStorageExample from "./src/AsyncStorage";
import GridView from "./src/grid/grid-view";
import languages from "./src/languages/language-module";

import SideMenu from "react-native-side-menu";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {lang: "en"}
    AsyncStorage.setItem("lang", 'fr');
    AsyncStorage.getItem("lang", (err, result) => {
      this.setState(previousState => {
        return { lang: result }
      })
    })
  }
  renderLeftSidebar(){
    return (
      <View>
        <Text style={{color: "#FFF"}}>
          Hello
        </Text>
      </View>
    )
  }
  render() {
    var lng = this.state.lang;
    console.log(languages[lng].hello)
    const menu = (
      <View>
        <Text>
          Hello
        </Text>
      </View>
    );
    const elements = {
      name: "Shafique",
    }
    return (
      <Routes menu={elements}/>
    )
  }
}
export default App