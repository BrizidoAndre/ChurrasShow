
import ContainerLogo from "../../components/container/container";
import { ButtonCadastrar, ButtonLogin, TextButton } from "../../components/button/style";
import {  LatoItalic14, Title } from "../../components/texts/style";
import Input from "../../components/input/input";
import { ContainerForm } from "../../components/container/style";


const RecoverPassword = () => {
  return (
    <ContainerLogo>
      <Title>Recuperar Senha</Title>

      <ContainerForm>
        <Input placeholder={"Email..."} />       
      </ContainerForm>

      <ButtonCadastrar>
        <TextButton>Continuar</TextButton>
      </ButtonCadastrar>

      <LatoItalic14>Made by Gamel Tec</LatoItalic14>
    </ContainerLogo>

    
  );
};

export default RecoverPassword;
