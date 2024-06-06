import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

//import { useFonts } from 'expo-font';
import Main from './src/pages/main/main';
import Home from './src/pages/home/home';
import Login from './src/pages/login/login';

import {
	useFonts,
	Lato_400Regular,
	Lato_700Bold,
} from '@expo-google-fonts/lato';
import Profile from './src/pages/profile/profile';

const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		Cintra: require('./assets/fonts/CintraRegular.ttf'),
	});

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Main"
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Main" component={Main} />

				<Stack.Screen name="Home" component={Home} />

				<Stack.Screen name="login" component={Login} />

				<Stack.Screen name="Profile" component={Profile} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
