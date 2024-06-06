import styled from 'styled-components';

export const MadeBy = styled.Text`
	color: #caa858;
	font-size: 15px;
	font-family: 'lato_bold';
	font-weight: 800;
	font-style: italic;

	position: absolute;
	top: ${(props) => props.height - 50}px;
`;
export const LatoRegular15 = styled.Text`
	color: #caa858;
	font-size: 15px;
	font-family: 'lato_regular';
`;

export const LatoRegular18 = styled.Text`
	color: #caa858;
	font-size: 18px;
	font-family: 'lato_regular';
`;
export const LatoRegular25 = styled.Text`
	color: #ffffff;
	font-size: 25px;
	font-family: 'lato_regular';
	text-align: center;
`;

export const Title = styled.Text`
	color: #caa858;
	font-size: 48px;
	font-family: 'Cintra';
	text-align: center;
	margin: 70px 0 120px 0;
`;
