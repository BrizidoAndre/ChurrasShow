import React, { useState } from 'react';
import { ButtonContainer, ButtonProfile, ButtonText, TinyButton, TinyButtonText } from './style';

export const PackageButton = ({ textButton, isSelected, onPress }) => {
	return (
		<ButtonContainer onPress={onPress} isSelected={isSelected}>
			<ButtonText>{textButton}</ButtonText>
		</ButtonContainer>
	);
};

export const ButtonEditar = ({ textButton, onPress }) => {
	return (
		<ButtonProfile
			activeOpacity={0.8}
			onPress={onPress}
		>
			<ButtonText>{textButton}</ButtonText>
		</ButtonProfile>
	);
}

export const ButtonStatus = ({ textButton, onPress, clickButton = false }) => {
	return (
		<TinyButton
			onPress={onPress}
			clickButton={clickButton}
		>
			<TinyButtonText clickButton ={clickButton}>{textButton}</TinyButtonText>
		</TinyButton>
	)
}