import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';
import { colors } from '../../theme/appTheme';

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>Esto es un icono</Text>
            <Icon name="build-outline" size={25} color={colors.soft.primary} />
        </View>
    );
};

export default HomeScreen;
