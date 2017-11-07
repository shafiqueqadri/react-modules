import React, { Component } from "react";
import { FlatList, Text, Image, View} from "react-native";

class FlastListExample extends Component {
    _onPressItem ( item ) {
        console.log(item)
    }
    render () {
        return (
            <View style={{marginTop: 50, flex: 1, backgroundColor: "silver"}}>
                <FlatList
                    data={[{ key: 'Lorem lipsum Lorem lipsum Lorem lipsum Lorem lipsum Lorem lipsum Lorem lipsum' }, { key: 'bLorem lipsum' }, { key: 'c' }, { key: 'b' }, { key: 'c' }, { key: 'b' }, { key: 'c' }, { key: 'b' }, { key: 'c' }, { key: 'b' }, { key: 'c' }, { key: 'b' }, { key: 'c' }]}
                    renderItem={({ item }) =>
                        <View style={{ paddingHorizontal: 10, height: 50, alignItems: 'center', backgroundColor: "gray", flexDirection: 'row', marginTop:1}}>
                            <Image source={require('../logo.png')} style={{ width: 40, height: 40}} />
                            <Text style={{ justifyContent: 'center',  color: "#FFF", marginLeft: 10}}>{item.key}</Text>
                        </View>
                    }
                    onPressItem={this._onPressItem}
                />
            </View>
        )
    }
}

module.exports = FlastListExample