import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Menu from '../Scene/Menu';
import webNews from '../Scene/webNews';
import Home from '../Scene/Home';
import LiveTv from '../components/LiveTv/LiveTv';
import MainNews from '../Scene/MainNews';

const Routes = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene
                initial
                key="drawer"
                drawer
                contentComponent={Menu}
                hideNavBar
                >
                    <Scene key="MainMenu">
                        <Scene key="Home" title="Pravasi Vision" component={Home} initial />
                        <Scene key="LiveTv" title="Live TV" component={LiveTv} />
                        <Scene key="web" title="Web News" component={webNews} />
                        <Scene key="About" title="About Us" component={webNews} />
                    </Scene>
                </Scene>
                <Scene key="category" component={webNews} />
                <Scene key="MainNews" component={MainNews} title="Detailed News" />
            </Stack>
        </Router>
    );
};
export default Routes;