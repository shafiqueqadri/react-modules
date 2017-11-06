import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Drawer from 'react-native-drawer'

class Home extends React.Component {
    constructor(){
        super();
        this.state = {open: false}
    }
    goToAbout (){
        this._controlMenu();
        Actions.about({firstParams: 1, secondParams: 2})
        
    }
    goToHome (){
        Actions.home({firstParams: 1, secondParams: 2})
    }
    componentDidMount() {
        this.setState(previous => {
            return { open: false }
        })
        Actions.refresh({
            left: () => <TouchableOpacity style={styles.menuButton} onPress={() => this._controlMenu()}><Text style={styles.whiteColor}>Menu</Text></TouchableOpacity>
        })
    }
    _controlMenu = () => {
        if (!this.state.open) {
            this._drawer.open()
            this.setState(previous => {
                return { open: !this.state.open }
            })
        } else {
            this._drawer.close();
            this.setState(previous => {
                return {open: !this.state.open}
            })
        }
        
    };
    render() {
        return (
            <Drawer
                type="overlay"
                ref={(ref) => this._drawer = ref}
                content={
                    <View>
                        <TouchableOpacity onPress={() => this.goToHome()}>
                            <Text style={styles.whiteColor}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.goToAbout()}>
                            <Text style={styles.whiteColor}>About</Text>
                        </TouchableOpacity>
                    </View>
                }
                tapToClose={true}
                openDrawerOffset={0.2} // 20% gap on the right side of drawer
                panCloseMask={0.2}
                closedDrawerOffset={-3}
                styles={drawerStyles}
                tweenHandler={(ratio) => ({
                    main: { opacity: (2 - ratio) / 2 }
                })}
            >
                <TouchableOpacity style={{ margin: 128 }} onPress={() => this.goToAbout()}>
                    <Text>This is HOME!</Text>
                </TouchableOpacity>
            </Drawer>
        )
    }
}
const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3, backgroundColor: "#000" },
    main: { paddingLeft: 3 },
}
const styles = StyleSheet.create({
    menuButton: {
        marginLeft: 10
    },
    whiteColor: {
        color: "#FFF"
    }
})

export default Home