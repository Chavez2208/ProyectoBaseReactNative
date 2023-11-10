import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import HomeDrawer from '../Home/HomeDrawer';

const Stack = createStackNavigator();
const LoginStackNav = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
        </Stack.Navigator>
    );
};

export default LoginStackNav;
