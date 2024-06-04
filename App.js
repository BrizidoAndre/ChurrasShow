import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import {  Button, StyleSheet, Text, View } from 'react-native';

import { useFonts } from 'expo-font';
import Login from './pages/login/login';
import Home from './pages/home/home';

import Main from './pages/main/main';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    "Cintra": require("./assets/fonts/CintraRegular.ttf")
  });



  return (
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName='HomeApp'
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