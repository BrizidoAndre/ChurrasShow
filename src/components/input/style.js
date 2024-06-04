import styled from 'styled-components/native';

export const InputGroup = styled.View`
	position: relative;
	margin-bottom: 20px;
	width: 90%;
`;

export const StyledInput = styled.TextInput`
	border-width: 1.5px;
	border-color: #a39b8b;
	border-radius: 10px; /* Ajuste para borda arredondada */
	background-color: #3a3a3a;
	padding: 10px;
	font-size: 16px;
	//font-family: ;
	color: #f5f5f5;
	font-family: 'Lato_400Regular';

	transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const StyledLabel = styled.Text`
	position: absolute;
	left: 15px;
	color: #f2e6d0;
	pointer-events: none;
	top: ${({ isFocused }) =>
		isFocused ? '-10px' : '10px'}; /* Ajuste para mover o rótulo */
	font-size: ${({ isFocused }) =>
		isFocused
			? '14px'
			: '16px'}; /* Ajuste para alterar o tamanho do rótulo */
	background-color: ${({ isFocused }) =>
		isFocused ? 'transparent' : 'transparent'};
	padding: ${({ isFocused }) => (isFocused ? '0 4px' : '0')};
	color: ${({ isFocused }) => (isFocused ? '#f2e6d0' : '#f2e6d0')};
	font-family: 'Lato_400Regular';
`;
