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


export const LatoItalic14 = styled(LatoRegular18)`
    font-size: 14px;
    font-style:italic;
    color: #F2E6D0;
`

export const LatoRegular14Creme = styled.Text`
    color: #F2E6D0;
    font-size:14px;
    font-family:'lato_regular';
`
export const LatoRegular20Creme = styled.Text`
    color: #F2E6D0;
    font-size:20px;
    font-family:'lato_regular';
`
export const LatoLight16Creme = styled.Text`
    color: #F2E6D0;
    font-size:16px;
    font-family:'lato_light';
`

export const LatoBold20Dourado = styled.Text`
    color: #C1A25A;
    font-size:20px;
    font-family:'lato_bold';
	text-transform: capitalize;
`
