import { LogoBlur } from "../image/image";
import { ContainerBackground } from "./style";
import imgLogo from '../../assets/logo.png'
import { Dimensions, Keyboard, KeyboardAvoidingView, Platform, useWindowDimensions } from "react-native";




const ContainerLogo = ({ children }) => {


    const { width, height } = useWindowDimensions();


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1 }}
        >
            <ContainerBackground source={imgLogo} imageStyle={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
                opacity: 0.6
            }} blurRadius={6}>
                {children}
            </ContainerBackground>
        </KeyboardAvoidingView>
    )
}



export default ContainerLogo;


