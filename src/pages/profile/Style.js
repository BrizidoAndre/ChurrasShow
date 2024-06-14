import styled from "styled-components";

export const ContainerPerfilScroll = styled.ScrollView`
    flex: 1;
    background-color:#1D1D1D;
    
`
export const ContainerPerfil = styled.SafeAreaView`
    justify-content: center;
    background-color:#1D1D1D;
    gap: 15px;
`

export const Header = styled.View`
    justify-content: center;
    align-items: center;
    gap: 18px;
    /* border: 2px solid green; */
    width: 100%;
    height: 300px;
`

export const ImageButton = styled.TouchableOpacity`
    width: auto;
    border-radius: 150px;
`

export const ImageProfile = styled.Image`
    border-radius: 200px;
    width: 162px;
    height: 158px;
    
`

export const Body = styled.View`
    align-items: center;
    gap: 15px;
    width: 100%;
    height: 400px;
`

export const Footer = styled.View`
    align-items: center;
    gap: 35px;
    /* border: 1px solid yellow; */
    width: 100%;
    margin-bottom: 33px;
`