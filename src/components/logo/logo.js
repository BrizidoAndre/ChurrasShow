import { Image } from "react-native"
import { Logotipo } from "./style"


const Logo = () => {

    return(
        <Logotipo
        source={require('../../assets/logo.png')}
        />
    )
}

export default Logo