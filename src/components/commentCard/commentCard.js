import { View } from "react-native"
import { BorderBottom, CommentImage, CommentText, ContainerComment, ImageStar } from "./styles"
import { ContainerRow, ContainerRowStar } from "../container/style"
import { LatoRegular18 } from "../texts/style"

import starFull from '../../assets/star.png'
import starEmpty from '../../assets/starEmpty.png'
import { useEffect, useState } from "react"
import { reloadAppAsync } from "expo"



const CommentName = ({ children }) => {


    return (
        <BorderBottom>
            <LatoRegular18>
                {children}
            </LatoRegular18>
        </BorderBottom>
    )
}

const CommentStars = ({ star }) => {

    const [score, setScore] = useState([])

    
    function reloadStar(){
        let arrayStar = []
        let points = star;
        for (let index = 0; index < 5; index++) {
            if(points > 0){
                arrayStar.push(<ImageStar source={starFull} />)
            }
            else{
                arrayStar.push(<ImageStar source={starEmpty} />)
            }
            points --;
        }

        return arrayStar
    }

    useEffect(()=>{
        setScore(reloadStar())
    },[])

    return (
        <ContainerRowStar>
            {score}
        </ContainerRowStar>
    )
}


const CommentCard = ({ name, img, comment, stars }) => {


    return (
        <ContainerComment>
            <ContainerRow>
                <CommentImage source={img} />
                <CommentName>{name}</CommentName>
            </ContainerRow>
            <CommentText>{comment}</CommentText>
            <CommentStars star={stars}/>
        </ContainerComment>
    )
}

export default CommentCard