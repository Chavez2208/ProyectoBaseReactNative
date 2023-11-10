import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import BottomTabNav from '../BottomTabsNav/BottomTabNav';

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                // headerShown: false,
            }}
        >
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen name="BottomTabNav" component={BottomTabNav} />
        </Drawer.Navigator>
    );
};

export default HomeDrawer;
