import styled from 'styled-components';

export const ButtonContainer = styled.TouchableOpacity.attrs({
	activeOpacity: 1,
})`
	background: #c1a25a;
	padding: 12px 26px;
	//border: 3px solid ;
	border-radius: 20px;
	box-shadow: 1px 1px 2px rgb(60, 46, 30);
	elevation: 3; // Sombra no Android
	shadow-color: #000;
	//shadow-offset: { width: 1px, height: 1px };
	shadow-opacity: 0.8;
	shadow-radius: 1px;

	&:active {
		transform: translate(1px, 1px);
		box-shadow: 0.5px 0.5px 1px rgb(60, 46, 30);
	}
`;

// Estilização do Texto do Botão
export const ButtonText = styled.Text`
	font-family: 'Lato_400Regular'; // Ajuste conforme a fonte que está usando
	//font-weight: 900;
	font-size: 15px;
	color: #3c2e1e;
`;
