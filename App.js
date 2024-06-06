import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import Main from './src/pages/main/main';
import Home from './src/pages/home/home';
import Login from './src/pages/login/login';
import FirstPage from './src/pages/firstPage/firstPage';
import CreateAccount from './src/pages/createAccount/createAccount';

import {
	useFonts,
	Lato_400Regular,
	Lato_700Bold,
} from '@expo-google-fonts/lato';
import { useCallback } from 'react';
import RecoverPassword from './src/pages/recoverPassword/recoverPassword';


const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded, fontError] = useFonts({
		Cintra: require('./assets/fonts/CintraRegular.ttf'),
		lato_regular:Lato_400Regular,
		lato_bold: Lato_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }


				<Stack.Screen name="Home" component={Home} />

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
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
          name='CreateAccount'
          component={CreateAccount} />

        <Stack.Screen
          name='RecoverPassword'
          component={RecoverPassword} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
