import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import { styles } from '../../theme/appTheme';

interface Props extends StackScreenProps<any, any> { }
const Login = ({ navigation }: Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text style={{ color: 'black' }}>Login</Text>
            <Button
                title="Iniciar Sesión"
                onPress={() => navigation.navigate('HomeDrawer')}
            />
        </View>
    );
};

export default Login;
