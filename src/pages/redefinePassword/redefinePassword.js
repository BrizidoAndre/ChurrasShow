import ContainerLogo from "../../components/container/container"
import { MadeBy, Title } from "../../components/texts/style"
import Input from "../../components/input/input"
import { ButtonLogin, TextButton } from "../../components/button/style"
import { useWindowDimensions } from "react-native"
import { ContainerForm } from "../../components/container/style"
import Spacing from "../../components/spacing/spacing"

const RedefinePassword = ({navigation}) => {

    const { width, height } = useWindowDimensions()

    return (
        <ContainerLogo>
            <Title>Redefinir Senha</Title>

            <ContainerForm>
                <Input placeholder={'Senha....'} />
                <Input placeholder={'Confirmar Senha....'} />
            </ContainerForm>

            <Spacing marginTop={'20'} />

            <ButtonLogin onPress={()=>navigation.navigate('Login')}>
                <TextButton>Continuar</TextButton>
            </ButtonLogin>

            <MadeBy height={height}>Made by Gamel Tec</MadeBy>

        </ContainerLogo>
    )
}

export default RedefinePassword