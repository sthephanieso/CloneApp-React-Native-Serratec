import 'react-native-gesture-handler';
import React from 'react';
import Email from './src/screens/Email';
import Senha from './src/screens/Senha';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';
import AppLoading from 'expo-app-loading';


const Stack = createStackNavigator();

function App () {
  const [fontsLoaded] = useFonts({
    Ubuntu_500Medium
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Email" component={Email} options={{tabBarVisible: false}}/>
      <Stack.Screen name="Senha" component={Senha} options={{tabBarVisible: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;