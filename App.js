import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import {  Button, StyleSheet, Text, View } from 'react-native';

import Main from './src/pages/main/main';
import Home from './src/pages/home/home';
import Login from './src/pages/login/login';

import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    "Cintra": require("./assets/fonts/CintraRegular.ttf"),
    "lato_regular": Lato_400Regular,
    "lato_bold": Lato_700Bold
  });



  return (
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName='Main'
        screenOptions={{
          headerShown:false
        }}>
          <Stack.Screen 
          name='Main'
          component={Main}/>
          
          <Stack.Screen 
          name='Home'
          component={Home}/>
          
          
          <Stack.Screen 
          name='login'
          component={Login}/>



        </Stack.Navigator>
      </NavigationContainer>
  );
}