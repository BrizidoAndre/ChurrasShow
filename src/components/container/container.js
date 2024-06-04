import { LogoBlur } from "../image/image";
import { ContainerBackground } from "./style";
import imgLogo from '../../assets/logo.png'




const ContainerLogo = ({ children }) => {


    return (
        <ContainerBackground>
            <LogoBlur source={imgLogo}  blurRadius={6} />
            {children}
        </ContainerBackground>
    )
}



export default ContainerLogo;
