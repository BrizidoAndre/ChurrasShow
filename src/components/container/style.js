import styled from "styled-components";
import img from '../../assets/logo.png'


export const Container = styled.View`
    height: 100%;
    width: 100%;
    background: #1D1D1D;

    align-items: center;
`
export const HomeContainer = styled(Container)`
    gap: 20px;
`


export const ContainerBackground = styled.ImageBackground`
    height: 100%;
    width: 100%;
    background-color: #000000;

    

    

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


export const ContainerForm = styled.View`
    gap: 20px;
    width: 100%;
    align-items:center;
`

export const StatusButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
`
