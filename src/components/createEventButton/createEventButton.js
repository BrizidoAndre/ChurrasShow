import {ButtonCreate, ImagePlus} from "./style";
import {Image, Text} from "react-native";
import imgPlus from '../../assets/plus.png'


export const CreateEventButton = ({onPress}) => {


    return (
        <ButtonCreate onPress={()=>onPress(true)}>
            <ImagePlus source={imgPlus} />
        </ButtonCreate>
    )
}

