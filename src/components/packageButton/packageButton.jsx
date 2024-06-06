import React from 'react';
import { ButtonProfile, PackageButtonX, ButtonText} from './style';

export const PackageButton = ({ textButton }) => {
	return (
		<ButtonContainer activeOpacity={0.8}>
			<ButtonText>{textButton}</ButtonText>
		</ButtonContainer>
	);
};

export const ButtonEditar = ({textButton, onPress}) =>{
	return(
		<ButtonProfile 
			activeOpacity={0.8}
			onPress={onPress}	
			>
			<ButtonText>{textButton}</ButtonText>
		</ButtonProfile>
	);
}
