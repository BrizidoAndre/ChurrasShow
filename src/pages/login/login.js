import { Text } from "react-native"
import ContainerLogo from "../../components/container/container"
import { ButtonLogin, TextButton } from "../../components/button/style"
import { Title } from "../../components/texts/style"
import Input from "../../components/input/input"
import { ContainerForm } from "../../components/container/style"



const Login = () => {


    return (
        <ContainerLogo>

            <Title>Login</Title>

            <ContainerForm>

                <Input placeholder={"Email ou Username..."} />
                <Input placeholder={"Senha"} />
            </ContainerForm>


        </ContainerLogo>
    )
}

export default Login
