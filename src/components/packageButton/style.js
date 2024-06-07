import styled, { css } from 'styled-components/native';

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

export const ButtonProfile = styled(ButtonContainer)`
	background-color: #F2E6D0;
	border-radius: 10px;
	width: 90%;
	align-items: center;
`;

export const TinyButton = styled.TouchableOpacity.attrs({
	underlayColor: '#607EC5'
})`
	width: 150px;
	height:32px ;
	justify-content: center;
	align-items: center;
	${props => props.clickButton ? css`
        border: 1px solid #A39B8B;
    ` : css`
		border: 1px solid #F2E6D0;
    `}
	border-radius: 20px;
	${props => props.clickButton ? css`
        background-color: #A39B8B;
    ` : css`
    	
    `}
`

export const TinyButtonText = styled.Text`
    font-size: 14px;
    font-family: 'Lato_400Regular';

    ${props => props.clickButton ? css`
        color: #3C2E1E;
    ` : css`
    color: #F2E6D0;
    `}
`

// Estilização do Texto do Botão
export const ButtonText = styled.Text`
	font-family: 'Lato_400Regular';
	font-size: 15px;
	color: #3c2e1e;
`;
