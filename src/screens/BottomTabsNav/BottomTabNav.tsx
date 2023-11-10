import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PageOne from './PageOne';
import BottomTabTopNav from '../BottomTabsTopNav/BottomTabTopNav';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name="PageOne" component={PageOne} options={{ title: 'Pantalla Numero 1' }} />
            <Tab.Screen name="BottomTabTopNav" component={BottomTabTopNav} options={{ title: 'Pantalla Numero 2' }} />
        </Tab.Navigator>
    );
};

export default BottomTabNav;
