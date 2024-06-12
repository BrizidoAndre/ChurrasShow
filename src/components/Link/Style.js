import styled from "styled-components";

export const LinkText = styled.Text`
    font-size: ${props => `${props.fontSize}px`};
    color: ${props => `#${props.color}`};
    text-decoration: underline;
    font-family:${props => `${props.fontFamily}`};
`

export const LinkTouch = styled.TouchableOpacity`
    width: auto;
`