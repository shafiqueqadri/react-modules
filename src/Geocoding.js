import React from 'react';
import { View, Image, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } } };
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } } };

class GooglePlacesInput extends React.Component{
    render() {
        return (
            
            <GooglePlacesAutocomplete
                placeholder='Enter Location'
                minLength={2}
                autoFocus={true}
                returnKeyType={'default'}
                fetchDetails={true}
                styles={{
                    textInputContainer: {
                        backgroundColor: 'rgba(0,0,0,0)',
                        borderTopWidth: 0,
                        borderBottomWidth: 0
                    },
                    textInput: {
                        marginLeft: 0,
                        marginRight: 0,
                        height: 38,
                        color: '#5d5d5d',
                        fontSize: 16
                    },
                    predefinedPlacesDescription: {
                        color: '#1faadb'
                    },
                }}
                currentLocation={true}
                query={{
                    // available options: https://developers.google.com/places/web-service/autocomplete
                    key: 'AIzaSyBGfvrnt3FZYRzH3eJLhxP7tmGsOP4Xtf0'
                }}
            />
        );
    }

}

export default GooglePlacesInput;