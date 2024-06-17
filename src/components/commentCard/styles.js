import styled from "styled-components"



export const CommentImage = styled.Image`
    width: 60px;
    height:60px;
    border-radius: 50px;

    z-index: 1;

    object-position: center;

    position: absolute;
    left:10px;
    top:10px;
`

export const ImageStar = styled.Image`
    width: 25px;
    height: 25px;
`


export const ContainerComment = styled.View`
    width: 300px;
    height: 100%;
    margin: 0 20px;
`

export const BorderBottom = styled.View`
    border-bottom-width: 2px;
    border-bottom-color: #CAA858;

    margin:20px 0 5px 0;
    padding: 0 20px 5px 20px;

    justify-content: center;
    align-items:center;
`

export const CommentText = styled.Text`
    max-height:45%;
    text-align:center;

    margin:20px 0;

    
    color:white;
    font-family:'lato_regular';
    font-size: 14px;
    
`