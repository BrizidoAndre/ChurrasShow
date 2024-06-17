import styled from "styled-components";
import img from '../../assets/logo.png'


export const Container = styled.View`
    height: 100%;
    width: 100%;
    background: #1D1D1D;

    align-items: center;
`

export const ContainerCream = styled.View`
    flex: 1;

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

export const CameraPermissionContainer = styled.View`
    display: flex;

    background-color:#1D1D1D ;

    justify-content: center;
    align-items:center;
    gap: 20px;

    height: 100%;
    z-index: 1;
    
`

export const BottomRowButtonContainer = styled.View`
    width:80%;
    display: flex;
    flex-direction: row;
    justify-content:center;

    gap: 30px;
    
    position: absolute;
    bottom: 30px;
    align-self:center;
`
