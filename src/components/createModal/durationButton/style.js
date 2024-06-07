import styled from 'styled-components';

export const ContentDurationButton = styled.View`
	width: 125px;
	height: 25px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const SubtractButton = styled.TouchableOpacity`
	width: 30px;
	height: 25px;
	background-color: #f2e6d0;
	border-radius: 8px;
	align-items: center;
	justify-content: center;
`;

export const VisualizeDurationButton = styled.View`
	width: 45px;
	height: 25px;
	background-color: #f2e6d0;
	border-radius: 8px;
	align-items: center;
	justify-content: center;
`;

export const TextDuration = styled.Text`
	color: #000000;
	font-size: 20px;
	font-family: 'lato_regular';
`;

export const AddButton = styled(SubtractButton)``;
