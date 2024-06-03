import React, { useState } from 'react';
import { InputGroup, StyledInput, StyledLabel } from './style';

const Input = ({ label }) => {
	const [isFocused, setIsFocused] = useState(false);
	const [value, setValue] = useState('');

	return (
		<InputGroup>
			<StyledInput
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(value !== '')}
				onChangeText={(text) => setValue(text)}
				value={value}
			/>
			<StyledLabel isFocused={isFocused || value !== ''}>
				{label}
			</StyledLabel>
		</InputGroup>
	);
};

export default Input;
