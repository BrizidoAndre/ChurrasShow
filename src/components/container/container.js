import { LogoBlur } from "../image/image";
import { ContainerBackground } from "./style";
import imgLogo from '../../assets/logo.png'




const ContainerLogo = ({children}) => {


    return (
        <ContainerBackground>
            <LogoBlur  source={imgLogo} resizeMode={'cover'} blurRadius={6}/>
        {children}
        </ContainerBackground>
    )
}



export default ContainerLogo;
