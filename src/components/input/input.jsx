import React, { useState } from 'react';
import {StyledInput } from './style';

const Input = ({setValue, value, placeholder, editable }) => {

	return (
			<StyledInput
				onChangeText={(text) => setValue(text)}
				value={value}
				placeholder={placeholder}
				editable={editable}
			/>
	);
};

export default Input;
