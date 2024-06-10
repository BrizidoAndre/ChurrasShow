import ContainerLogo from "../../components/container/container";
import { ButtonCadastrar, ButtonLogin, TextButton } from "../../components/button/style";
import {   LatoRegular15, MadeBy, Title } from "../../components/texts/style";
import Input from "../../components/input/input";
import { ContainerForm } from "../../components/container/style";
import { useWindowDimensions } from "react-native";
import CommentModal from "../../components/commentModal/commentModal";
import { useState } from "react";


const CreateAccount = () => {
  const{width, height} = useWindowDimensions()

  const [modalVisible, setModalVisible] = useState(false);

  const handleRegister = () => {
    // Lógica para cadastro (validação, envio de dados, etc.)
    setModalVisible(true);
  };

  return (
    <ContainerLogo>
      <Title>Criar Conta</Title>

      <ContainerForm>
        <Input placeholder={"Nome..."} />
           
        <Input placeholder={"Email..."} />
      
        <Input placeholder={"Senha..."} />
      
        <Input placeholder={"Confirmar Senha..."} />
      </ContainerForm>

      <ButtonCadastrar onPress={handleRegister}>
        <TextButton>Cadastrar</TextButton>
      </ButtonCadastrar>

      <MadeBy height={height}>Made by Gamel Tec</MadeBy>

      <CommentModal visible={modalVisible} />
    </ContainerLogo>

    
  );
};

export default CreateAccount;
