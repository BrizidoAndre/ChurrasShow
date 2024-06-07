import React, { useState } from 'react';
import { ButtonContainer, ButtonText } from './style';

export const PackageButton = ({ textButton, isSelected, onPress }) => {
	return (
		<ButtonContainer onPress={onPress} isSelected={isSelected}>
			<ButtonText>{textButton}</ButtonText>
		</ButtonContainer>
	);
};
