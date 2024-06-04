import styled from 'styled-components';
import * as Font from 'expo-font';

// export const CreateModalX = styled.View`
// 	width: 90%;
// 	height: 80%;
// `;

export const ContentCreateModal = styled.View`
	width: 90%;
	height: auto;
	border: 1px solid #caa858;
	border-radius: 20px;
	align-items: center;
`;

export const ContainerPackageButton = styled.View`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: row;
	gap: 24px;
`;

export const TitleModal = styled.Text`
	font-size: 20px;
	font-family: 'Lato_700Bold';
`;
