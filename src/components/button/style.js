import styled from "styled-components";
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';

export const ButtonLogin = styled.TouchableOpacity`
    width: 90%;
    height:44px;
    border: #CAA858;
    border-radius: 20px;
    background-color: transparent;
    
    align-items: center;
    justify-content: center;
    
`
export const ButtonCadastrar = styled(ButtonLogin)`
    margin-top: 66px;
    margin-bottom:86px;
`
export const TextButton = styled.Text`
    font-family:'lato_bold';

    font-size:24px;
    color:  #CAA858
`
