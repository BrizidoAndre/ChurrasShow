import { Text } from "react-native"
import ContainerLogo from "../../components/container/container"
import { ButtonLogin, TextButton } from "../../components/button/style"
import { Title } from "../../components/texts/style"
import Input from "../../components/input/input"



const CreateAccount = ({navigation}) => {
    

    return (
        <ContainerLogo>

            <Title>Cadastrar Conta</Title>

            <Input label={'Nome...'}/>
            <Input label={'Email...'}/>
            <Input label={'Senha...'}/>
            <Input label={'Confirmar Senha...'}/>

            <ButtonLogin>
                <TextButton>
                    Cadastrar
                </TextButton>
            </ButtonLogin>
            

        </ContainerLogo>
    )
}

export default CreateAccount
