import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Animated } from 'react-native';

export const ToggleSwitch = () => {
	const [isOn, setIsOn] = useState(false);
	const translateX = useState(new Animated.Value(0))[0];

	const toggleSwitch = () => {
		Animated.timing(translateX, {
			toValue: isOn ? 0 : 53,
			duration: 300,
			useNativeDriver: true,
		}).start();
		setIsOn(!isOn);
	};

	return (
		<TouchableOpacity
			onPress={toggleSwitch}
			style={[styles.switch, isOn && styles.switchOn]}
		>
			<Animated.View
				style={[styles.circle, { transform: [{ translateX }] }]}
			/>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	switch: {
		width: 85,
		height: 25,
		borderRadius: 20,
		backgroundColor: '#F2E6D0',
		justifyContent: 'center',
		padding: 4,
	},
	switchOn: {
		backgroundColor: '#C1A25A',
	},
	circle: {
		width: 22,
		height: 22,
		borderRadius: 12,
		backgroundColor: '#3C2E1E',
	},
});
