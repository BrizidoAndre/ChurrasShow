import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity.attrs({
	activeOpacity: 1,
})`
	background: ${({ isSelected }) => (isSelected ? '#F2E6D0' : '#C1A25A')};
	padding: 12px 17px;
	border-radius: 20px;
`;

// Estilização do Texto do Botão
export const ButtonText = styled.Text`
	font-family: 'Lato_400Regular';
	font-size: 15px;
	color: #3c2e1e;
`;
