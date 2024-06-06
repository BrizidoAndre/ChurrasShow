import styled from "styled-components"; 




export const MadeBy = styled.Text`
    color: #CAA858;
    font-size:15px;
    font-family:'lato_bold';
    font-weight: 800;
    font-style:italic;

    position: absolute;
    top: ${(props) => props.height - 50}px
`
export const LatoRegular15 = styled.Text`
    color: #CAA858;
    font-size:15px;
    font-family:'lato_regular';
`

export const LatoRegular18 = styled.Text`
    color: #CAA858;
    font-size:18px;
    font-family:'lato_regular';
`


export const Title = styled.Text`
    color: #CAA858;
    font-size: 48px;
    font-family: 'Cintra';

    text-align: center;

    margin: 70px 0 120px 0;
`
export const LatoItalic14 = styled(LatoRegular18)`
    font-size: 14px;
    font-style:italic;
    color: #F2E6D0;
`

export const LatoBoldUnderline = styled.Text`
    color: #F2E6D0;
    font-family: 'lato_bold';
    font-size:14;
    font-style: italic;
    font-weight: 900;
    text-decoration:underline;
`