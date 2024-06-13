import styled from 'styled-components';
import { LatoRegular15 } from '../texts/style';
import { ContainerRowStar } from '../container/style';

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
	gap: 24px;
	margin-bottom: 26px;
`;

export const TitleModal = styled.Text`
	font-size: 20px;
	font-family: 'Lato_700Bold';
	color: #caa858;
	margin-top: 15px;
	margin-bottom: 18px;
`;

export const ContainerComment = styled.TextInput.attrs({
	multiline: true,
	textAlignVertical: 'top'
  })`
	width: 90%;
	height: 283px;
	background-color: #F2E6D0;
	border-radius: 20px;
	padding: 15px;
	margin-top: 15px;
  `;
export const LatoComment = styled(LatoRegular15)`
	color: #000000;
	
`;

export const ContainerRowStarModal = styled(ContainerRowStar)`

  margin-bottom: 150px;
  margin-left:20px;
  align-items: center;

`

