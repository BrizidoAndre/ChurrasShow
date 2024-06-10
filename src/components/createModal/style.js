import styled from 'styled-components';
import * as Font from 'expo-font';

export const CreateModalX = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.8);
`;

export const ContentCreateModal = styled.View`
	width: 90%;
	height: 650px;
	border: 1px solid #caa858;
	background-color: #000;
	border-radius: 20px;
	align-items: center;
`;

export const ContainerPackageButton = styled.View`
	width: 90%;
	height: auto;
	display: flex;
	flex-direction: row;
	align-content: center;
	align-self: center;
	gap: 24px;
	margin-bottom: 26px;
	overflow: hidden;
`;

export const TitleModal = styled.Text`
	font-size: 20px;
	font-family: 'Lato_700Bold';
	color: #caa858;
	margin-top: 15px;
	margin-bottom: 18px;
`;

export const NumberOfGuests = styled.TextInput`
	width: 125px;
	height: 25px;
	background-color: #f2e6d0;
	border-radius: 20px;
	color: #000;
	text-align: center;
`;
