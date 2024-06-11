import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity.attrs({
	activeOpacity: 1,
})`
	background: #c1a25a;
	padding: 12px 20px;
	border-radius: 20px;
	elevation: 3; /* Sombra no Android */

	&:active {
		transform: translate(1px, 1px);
	}
`;

// Estilização do Texto do Botão
export const ButtonText = styled.Text`
	font-family: 'Lato_400Regular';
	font-size: 15px;
	color: #3c2e1e;
`;
