import React from 'react'
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
const App = () => {
  console.log(languages)
  return (
    <Routes />
  )
}
export default App