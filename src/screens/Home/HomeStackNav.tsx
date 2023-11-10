import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeDrawer from './HomeDrawer';

const Stack = createStackNavigator();

const HomeStackNav = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
        </Stack.Navigator>
    );
};

export default HomeStackNav;
