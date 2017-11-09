import React, { Component } from "react";
import { FlatList, Text, Image, View} from "react-native";

class FlastListExample extends Component {
    _onPressItem ( item ) {
        console.log(item)
    }
    _renderItem ({item}) {
        return <MyListView
            id={item.id}
            title={item.title}
        />
    }
    render () {
        return (
            <View style={{marginTop: 50, flex: 1, backgroundColor: "silver"}}>
                <FlatList
                    data={[{ id: 1, title: 'Lorem lipsum Lorem lipsum Lorem lipsum Lorem lipsum Lorem lipsum Lorem lipsum' }, { id: 2, title: 'bLorem lipsum' }]}
                    renderItem={this._renderItem}
                    onPressItem={this._onPressItem}
                />
            </View>
        )
    }
}

class MyListView extends Component {
    render () {
        return (
            <View  style={{ paddingHorizontal: 10, height: 50, alignItems: 'center', backgroundColor: "gray", flexDirection: 'row', marginTop: 1 }}>
                <Image source={require('../logo.png')} style={{ width: 40, height: 40 }} />
                <Text style={{ justifyContent: 'center', color: "#FFF", marginLeft: 10, paddingRight: 40 }}>{this.props.title}</Text>
                <Image source={require('../logo.png')} style={{ width: 40, height: 40, alignContent: 'flex-end', alignSelf: 'flex-end', right: 40 }} />
            </View>
        )
    }
}

module.exports = FlastListExample