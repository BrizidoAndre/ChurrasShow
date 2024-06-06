
import ContainerLogo from "../../components/container/container"
import { ButtonLogin, TextButton } from "../../components/button/style"
import { LatoBoldItalic15, Title } from "../../components/texts/style"
import Input from "../../components/input/input"

console.log(ContainerLogo);
console.log(ButtonLogin);
console.log(TextButton);
console.log(LatoBoldItalic15);
console.log(Title);
console.log(Input);

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
