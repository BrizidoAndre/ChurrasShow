import ContainerLogo from "../../components/container/container";
import { ButtonCadastrar, ButtonLogin, TextButton } from "../../components/button/style";
import { LatoRegular15, MadeBy, Title } from "../../components/texts/style";
import Input from "../../components/input/input";
import { ContainerForm } from "../../components/container/style";
import { ActivityIndicator, Alert, KeyboardAvoidingView, Platform, useWindowDimensions } from "react-native";
import { useState } from "react";
import Spacing from "../../components/spacing/spacing";
import api from "../../service/service";


const CreateAccount = () => {
  const{width, height} = useWindowDimensions()
  return (
    <ContainerLogo>
      <Title>Criar Conta</Title>

      <ContainerForm>
        <Input
          placeholder={"Nome..."}
          value={newAccount.name}
          setValue={(txt) => {
            setNewAccont({
              ...newAccount,
              name: txt
            })
          }}
        />
        <Input
          placeholder={"Email..."}
          value={newAccount.email}
          setValue={(txt) => {
            setNewAccont({
              ...newAccount,
              email: txt
            })
          }}
        />
        <Input
          placeholder={"Rg..."}
          value={newAccount.rg}
          setValue={(txt) => {
            setNewAccont({
              ...newAccount,
              rg: txt
            })
          }}
        />
        <Input
          placeholder={"CPF..."}
          value={newAccount.cpf}
          setValue={(txt) => {
            setNewAccont({
              ...newAccount,
              cpf: txt
            })
          }}
        />
        <Input
          placeholder={"Senha..."}
          value={newAccount.password}
          setValue={(txt) => {
            setNewAccont({
              ...newAccount,
              password: txt
            })
          }}
          secure={true}
        />
        <Input
          placeholder={"Confirmar Senha..."}
          value={newAccount.confirmPassword}
          setValue={(txt) => {
            setNewAccont({
              ...newAccount,
              confirmPassword: txt
            })
          }}
          secure={true}
        />
      </ContainerForm>

      <ButtonCadastrar>
        <TextButton>Cadastrar</TextButton>
      </ButtonCadastrar>

      <MadeBy height={height}>Made by Gamel Tec</MadeBy>

      <CommentModal visible={modalVisible} />
    </ContainerLogo>


  );
};

export default CreateAccount;
