import React, { useState } from 'react';
import { StyledInput } from './style';
import { Text } from 'react-native';
import { LatoMedium14Red } from '../texts/style';

const Input = ({
	setValue,
	value,
	placeholder,
	secure = false,
	hasError = false,
	editable = true,
	messageError = `${placeholder} não foi digitado corretamente`,
}) => {
	return (
		<>
			<StyledInput
				onChangeText={setValue}
				value={value}
				placeholder={placeholder}
				secureTextEntry={secure}
				editable={editable}
			/>
			{!hasError || (
				<LatoMedium14Red>
					{placeholder} não foi digitado corretamente
				</LatoMedium14Red>
			)}
		</>
	);
};

export default Input;
