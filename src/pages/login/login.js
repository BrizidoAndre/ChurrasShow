import { Text } from "react-native"
import ContainerLogo from "../../components/container/container"
import { ButtonLogin, TextButton } from "../../components/button/style"
import { LatoBoldUnderline, LatoItalic14, MadeBy, Title } from "../../components/texts/style"
import Input from "../../components/input/input"
import { ContainerForm } from "../../components/container/style"
import Spacing from "../../components/spacing/spacing"

import { useWindowDimensions } from "react-native"



const Login = ({navigation}) => {

    const {width, height} = useWindowDimensions();


    return (
        <ContainerLogo>

            <Title>Login</Title>

            <ContainerForm>
                <Input placeholder={"Email ou Username..."}  />
                <Input placeholder={"Senha"} />

                <LatoBoldUnderline onPress={()=>navigation.navigate('RedefinePassword')}>Esqueceu a senha?</LatoBoldUnderline>
            </ContainerForm>

            <Spacing  marginTop={'20'} />

            <ButtonLogin>
                <TextButton>
                    Login
                </TextButton>
            </ButtonLogin>

            <Spacing marginTop={20}/>
            <LatoItalic14>Não possui conta? <LatoBoldUnderline>Crie Uma agora</LatoBoldUnderline></LatoItalic14>

            <MadeBy height={height}>Made by Gamel Tec</MadeBy>


        </ContainerLogo>
    )
}

export default Login
