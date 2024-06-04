import React from 'react';
import { PackageButtonX } from './style';

export const PackageButton = ({ textButton }) => {
	return (
		<ButtonContainer activeOpacity={0.8}>
			<ButtonText>{textButton}</ButtonText>
		</ButtonContainer>
	);
};
