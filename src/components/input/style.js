import styled from 'styled-components/native';

export const InputGroup = styled.View`
	position: relative;
	margin-bottom: 20px;
`;

export const StyledInput = styled.TextInput`
	border-width: 1.5px;
	border-color: #9e9e9e;
	border-radius: 10px; /* Ajuste para borda arredondada */
	background-color: transparent;
	padding: 10px;
	font-size: 16px;
	color: #f5f5f5;
	transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const StyledLabel = styled.Text`
	position: absolute;
	left: 15px;
	color: #e8e8e8;
	pointer-events: none;
	top: ${({ isFocused }) =>
		isFocused ? '-10px' : '10px'}; /* Ajuste para mover o rótulo */
	font-size: ${({ isFocused }) =>
		isFocused
			? '12px'
			: '16px'}; /* Ajuste para alterar o tamanho do rótulo */
	background-color: ${({ isFocused }) =>
		isFocused ? '#212121' : 'transparent'};
	padding: ${({ isFocused }) => (isFocused ? '0 4px' : '0')};
	color: ${({ isFocused }) => (isFocused ? '#2196f3' : '#e8e8e8')};
`;
