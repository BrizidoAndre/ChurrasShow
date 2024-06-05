import styled from "styled-components";
import img from '../../assets/logo.png'


export const Container = styled.View`
    height: 100%;
    width: 100%;
    background: #000000;

    align-items: center;
`


export const ContainerBackground = styled.ImageBackground`
    height: 100%;
    width: 100%;
    background-color: #000000;

    position: relative;
    

    align-items: center;
`


export const ContainerRow = styled.View`
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
`

export const ContainerRowStar = styled.View`
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    gap: 20px;

    position:absolute;
    bottom: 20px;
    left: 16%;
`