import React, { useState } from 'react';
import { ButtonContainer, ButtonText } from './style';

export const PackageButton = ({ textButton }) => {
	const [isPressed, setIsPressed] = useState(false);

	return (
		<ButtonContainer
			onPressIn={() => setIsPressed(true)}
			onPressOut={() => setIsPressed(false)}
			isPressed={isPressed}
		>
			<ButtonText>{textButton}</ButtonText>
		</ButtonContainer>
	);
};
