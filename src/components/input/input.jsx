import React, { useState } from 'react';
import {StyledInput } from './style';

const Input = ({setValue, value, placeholder, }) => {

	return (
			<StyledInput
				onChangeText={(text) => setValue(text)}
				value={value}
				placeholder={placeholder}
			/>
	);
};

export default Input;
