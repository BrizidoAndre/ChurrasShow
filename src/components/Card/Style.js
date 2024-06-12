import styled from "styled-components";

export const CardContainer = styled.View`
    width: 90%;
    height: 109px;
    background-color: #F2E6D0;
    margin-bottom: 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: flex-start;
    
`
export const BoxCard = styled.View`
    width: 90%;
    margin-top: 7px;
    justify-content: space-between;
    gap: 15px;
    align-items: center;
    flex-direction: row;
    /* border: 1px solid red; */
  
`

export const TitleList = styled.Text`
    font-weight: bold;
    font-size: 15px;
`

export const BoxImage = styled.View`
   border-radius: 10px;
    width: auto;
    /* border: 1px solid red; */
`

export const FoodImage = styled.Image`
    border-radius: 10px;
`


export const BoxText = styled.View`
    /* width:auto ; */
    width: 48%;
    /* border: 1px solid red; */
`

export const PriceText = styled.Text`
    font-weight: bold;
    font-size: 15px;
`

export const BoxTextPrice = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    gap: 30px;
    /* border: 1px solid red; */
`
