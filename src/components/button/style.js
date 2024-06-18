import styled from 'styled-components';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';

export const ButtonLogin = styled.TouchableOpacity`
    width: 90%;
    height:44px;
    border: #CAA858;
    border-radius: 20px;
    background-color: transparent;
    
    align-items: center;
    justify-content: center;
    
`
export const ButtonCadastrar = styled(ButtonLogin)`
    margin-top: 66px;
    margin-bottom:86px;
`
 export const TextButton = styled.Text`
    font-family:'lato_bold';

	align-items: center;
	justify-content: center;

	font-size: 24px;
	color: #caa858;
`;

export const ButtonModal = styled.TouchableOpacity`
	width: 155px;
	height: 25px;
	border: 1px solid #3c2e1e;
	border-radius: 20px;
	background-color: #f2e6d0;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 87%;
`;
