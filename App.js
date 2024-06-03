import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import { useFonts } from 'expo-font';
import Login from './src/pages/login/login';
import Input from './src/components/input/input';

export function HomeApp({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={{ fontFamily: 'Cintra' }}>ChurrasShow</Text>
			<Button
				title="Clique para ir para login"
				onPress={() => navigation.navigate('Login')}
			/>
			<Input label="Teste" />
			<StatusBar style="auto" />
		</View>
	);
}

const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		Cintra: require('./assets/fonts/CintraRegular.ttf'),
	});

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Home" component={HomeApp} />

				<Stack.Screen name="Login" component={Login} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
