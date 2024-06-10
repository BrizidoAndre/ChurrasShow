import styled from "styled-components";

export const Header = styled.View`
    flex-direction: row;
    width: 90%;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`

export const BoxHeader = styled.View`
    align-items: flex-start;
    width: auto;
`

export const ImageButton = styled.TouchableOpacity`
    width: auto;
    border-radius: 150px;
`

export const ImageProfile = styled.Image`
    border-radius: 200px;
    height: 68px;
    width: 68px;
`

export const BodyHome = styled.View`
    align-items: center;
    /* border: 1px solid red; */
    gap: 15px;
    width: 100%;
    height: 400px;
`