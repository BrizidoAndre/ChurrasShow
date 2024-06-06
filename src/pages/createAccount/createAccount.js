import ContainerLogo from "../../components/container/container";
import { ButtonCadastrar, ButtonLogin, TextButton } from "../../components/button/style";
import { LatoBoldItalic15, Title } from "../../components/texts/style";
import Input from "../../components/input/input";
import { ContainerForm } from "../../components/container/style";


const CreateAccount = () => {
  return (
    <ContainerLogo>
      <Title>Criar Conta</Title>

      <ContainerForm>
        <Input placeholder={"Nome..."} />
           
        <Input placeholder={"Email..."} />
      
        <Input placeholder={"Senha..."} />
      
        <Input placeholder={"Confirmar Senha..."} />
      </ContainerForm>

      <ButtonCadastrar>
        <TextButton>Cadastrar</TextButton>
      </ButtonCadastrar>

      <LatoBoldItalic15>Made by Gamel Tec</LatoBoldItalic15>
    </ContainerLogo>

    
  );
};

export default CreateAccount;
