import React, { useState } from 'react';
import {StyledInput } from './style';

const Input = ({setValue, value, placeholder, secure=false }) => {

	return (
			<StyledInput
				onChangeText={setValue}
				value={value}
				placeholder={placeholder}
				secureTextEntry={secure}
			/>
	);
};

export default Input;
