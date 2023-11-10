import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginStackNav from './src/screens/Login/LoginStackNav';

const App = () => {

  //DENTRO DEL COMPONENTE
  StatusBar.setTranslucent(true);
  StatusBar.setBackgroundColor('transparent');
  StatusBar.setBarStyle('dark-content');
  return (
    <NavigationContainer>
      <LoginStackNav />
    </NavigationContainer>
  );
};

export default App;
