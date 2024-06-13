import React from 'react';
import { TextBack, TouchableOpacityBack } from './style';
import { TouchableOpacity } from 'react-native';

export const Back = ({ onPress }) => {
	return (
		<TouchableOpacityBack onPress={onPress}>
			<TextBack>Voltar</TextBack>
		</TouchableOpacityBack>
	);
};
