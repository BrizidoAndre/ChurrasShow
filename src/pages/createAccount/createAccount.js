import ContainerLogo from "../../components/container/container";
import { ButtonCadastrar, ButtonLogin, TextButton } from "../../components/button/style";
import {   LatoRegular15, MadeBy, Title } from "../../components/texts/style";
import Input from "../../components/input/input";
import { ContainerForm } from "../../components/container/style";
import { useWindowDimensions } from "react-native";


const CreateAccount = ({navigation}) => {
  const{width, height} = useWindowDimensions()
  return (
    <ContainerLogo>
      <Title>Criar Conta</Title>

      <ContainerForm>
        <Input placeholder={"Nome..."} />
           
        <Input placeholder={"Email..."} />
      
        <Input placeholder={"Senha..."} />
      
        <Input placeholder={"Confirmar Senha..."} />
      </ContainerForm>

      <ButtonCadastrar onPress={() => {navigation.navigate('Login')}}>
        <TextButton>Cadastrar</TextButton>
      </ButtonCadastrar>

      <MadeBy height={height}>Made by Gamel Tec</MadeBy>
    </ContainerLogo>

    
  );
};

export default CreateAccount;
