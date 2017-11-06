import React, { Component } from "react";
import Drawer from 'react-native-drawer'
import Routes from "./components/routes/Routes";

class SideBarMenu extends Component {
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };
    render() {
        return (
            //Material Design Style Drawer
            <Drawer
                type="overlay"
                content={<Routes />}
                tapToClose={true}
                openDrawerOffset={0.2} // 20% gap on the right side of drawer
                panCloseMask={0.2}
                closedDrawerOffset={-3}
                styles={drawerStyles}
                tweenHandler={(ratio) => ({
                    main: { opacity: (2 - ratio) / 2 }
                })}
            >
                <Routes />
            </Drawer>
        )
    }
}
export default SideBarMenu;

const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
    main: { paddingLeft: 3 },
}