
import ContainerLogo from "../../components/container/container"
import { ButtonLogin, TextButton } from "../../components/button/style"
import { LatoBoldItalic15, Title } from "../../components/texts/style"
import Input from "../../components/input/input"



const CreateAccount = () => {
    

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

            <LatoBoldItalic15>Made by Gamel Tec</LatoBoldItalic15>
            

        </ContainerLogo>
    )
}

export default CreateAccount
