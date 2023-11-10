import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

const Tab = createMaterialTopTabNavigator();

const BottomTabTopNav = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarAndroidRipple: { borderless: false },
            }}
        >
            <Tab.Screen name="PageOne" component={PageOne} />
            <Tab.Screen name="PageTwo" component={PageTwo} />
        </Tab.Navigator>
    );
};

export default BottomTabTopNav;
