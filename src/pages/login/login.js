import { Text } from "react-native"
import ContainerLogo from "../../components/container/container"
import { ButtonLogin, TextButton } from "../../components/button/style"
import { LatoBoldUnderline, LatoItalic14, MadeBy, Title } from "../../components/texts/style"
import Input from "../../components/input/input"
import { ContainerForm } from "../../components/container/style"
import Spacing from "../../components/spacing/spacing"

import { useWindowDimensions } from "react-native"
import { Link } from "../../components/Link/Link"
import { RowBox } from "./style"




const Login = ({ navigation }) => {

    const { width, height } = useWindowDimensions();


    return (
        <ContainerLogo>

            <Title>Login</Title>

            <ContainerForm>
                <Input placeholder={"Email ou Username..."} />
                <Input placeholder={"Senha"} />

                <Link
                    onPress={() => { navigation.navigate('RecoverPassword') }}
                    fontSize={14}
                    color={'F2E6D0'}
                    fontFamily={'lato_bold_italic'}
                    textLink={'Esqueceu a senha?'}

                />

            </ContainerForm>

            <Spacing marginTop={'20'} />

            <ButtonLogin onPress={() => { navigation.navigate('Home') }}>
                <TextButton>
                    Login
                </TextButton>
            </ButtonLogin>

            <Spacing marginTop={20} />
            <RowBox>
                <LatoItalic14>Não possui conta? </LatoItalic14>
                <Link
                    onPress={() => { navigation.navigate('CreateAccount') }}
                    fontSize={14}
                    color={'F2E6D0'}
                    fontFamily={'lato_bold_italic'}
                    textLink={'Criar uma agora!'}
                />
            </RowBox>


            <MadeBy height={height}>Made by Gamel Tec</MadeBy>


        </ContainerLogo>
    )
}

export default Login
