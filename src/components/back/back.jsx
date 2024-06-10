import React from 'react';

import { TextBack, TouchableOpacityBack } from './style';
import { TouchableOpacity } from 'react-native';

export const Back = () => {
	return (
		<TouchableOpacityBack>
			<TextBack>Voltar</TextBack>
		</TouchableOpacityBack>
	);
};
