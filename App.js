import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

import Main from "./src/pages/main/main";
import Home from "./src/pages/home/home";
import Login from "./src/pages/login/login";
import FirstPage from "./src/pages/firstPage/firstPage";
import CreateAccount from "./src/pages/createAccount/createAccount";

import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
  Lato_300Light,
  Lato_700Bold_Italic
} from '@expo-google-fonts/lato';
import Profile from './src/pages/profile/profile';

import { useCallback } from 'react';
import RedefinePassword from './src/pages/redefinePassword/redefinePassword';
import { CheckEmail } from './src/pages/checkEmail/checkEmail';
import RecoverPassword from "./src/pages/recoverPassword/recoverPassword";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Cintra: require('./assets/fonts/CintraRegular.ttf'),
    lato_regular: Lato_400Regular,
    lato_bold: Lato_700Bold,
    lato_light: Lato_300Light,
    lato_bold_italic: Lato_700Bold_Italic

  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name='Main'
          component={Main} />

        <Stack.Screen
          name='Home'
          component={Home} />


        <Stack.Screen
          name='Login'
          component={Login} />


        <Stack.Screen
          name='FirstPage'
          component={FirstPage} />

        <Stack.Screen
          name='RedefinePassword'
          component={RedefinePassword} />

        <Stack.Screen
          name='RecoverPassword'
          component={RecoverPassword} />


        <Stack.Screen
          name="CheckEmail"
          component={CheckEmail} />

        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount} />

          
        <Stack.Screen
          name="Profile"
          component={Profile} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
