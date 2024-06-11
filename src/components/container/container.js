import { LogoBlur } from "../image/image";
import { ContainerBackground } from "./style";
import imgLogo from '../../assets/logo.png'
import { useWindowDimensions } from "react-native";




const ContainerLogo = ({ children }) => {

    
    const {width, height} = useWindowDimensions();

    return (
        <ContainerBackground>
            <LogoBlur source={imgLogo}  blurRadius={6} height={height}/>
            {children}
        </ContainerBackground>
    )
}



export default ContainerLogo;
