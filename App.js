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
  Lato_300Light
} from '@expo-google-fonts/lato';
import Profile from './src/pages/profile/profile';

import { useCallback } from "react";
import RecoverPassword from "./src/pages/recoverPassword/recoverPassword";

import { CheckEmail } from "./src/pages/checkEmail/checkEmail";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Cintra: require('./assets/fonts/CintraRegular.ttf'),
    lato_regular: Lato_400Regular,
    lato_bold: Lato_700Bold,
    lato_light: Lato_300Light,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  <Stack.Screen name="Home" component={Home} />;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={Main} />

        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="FirstPage" component={FirstPage} />

        <Stack.Screen name="CreateAccount" component={CreateAccount} />

        <Stack.Screen name="RecoverPassword" component={RecoverPassword} />

        <Stack.Screen
          name="Profile"
          component={Profile} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
