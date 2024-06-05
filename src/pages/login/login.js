import { Text } from "react-native"
import ContainerLogo from "../../components/container/container"
import { ButtonLogin, TextButton } from "../../components/button/style"
import { Title } from "../../components/texts/style"
import Input from "../../components/input/input"



const Login = () => {
    

    return (
        <ContainerLogo>

            <Title>Login</Title>

            <Input label={'Email ou username'}/>
            

        </ContainerLogo>
    )
}

export default Login
