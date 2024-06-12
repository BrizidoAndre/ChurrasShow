import ContainerLogo from "../../components/container/container";
import { ButtonCadastrar, ButtonLogin, TextButton } from "../../components/button/style";
import { LatoRegular15, MadeBy, Title } from "../../components/texts/style";
import Input from "../../components/input/input";
import { ContainerForm } from "../../components/container/style";
import { ActivityIndicator, Alert, KeyboardAvoidingView, Platform, useWindowDimensions } from "react-native";
import { useState } from "react";
import Spacing from "../../components/spacing/spacing";
import api from "../../service/service";


const CreateAccount = ({ navigation }) => {
  const { width, height } = useWindowDimensions()

  const [newAccount, setNewAccont] = useState({
    name: 'Merda',
    email: 'Irhemas@email.com',
    cpf: '01186595027',
    rg: '487982472',
    password: 'senhas',
    confirmPassword: 'senhas',
  })


  const [loading, setLoading] = useState(false)


  async function createAccount() {
    try {


      setLoading(true);

      if (newAccount.password !== newAccount.confirmPassword) {
        Alert.alert('Erro de cadastro', 'As senhas digitadas são distintas')
      }

      form = new FormData();

      form.append('Nome', newAccount.name);
      form.append('Email', newAccount.email);
      form.append('Senha', newAccount.password);
      form.append('Rg', newAccount.rg);
      form.append('Cpf', newAccount.cpf);
      form.append('IdTipoUsuario', '313b86a0-e84d-4eb8-b892-d0bcfd293918');

      const res = await api.post('/Usuario', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      navigation.replace('Login')

      setLoading(false)
    }
    catch (e) {
      console.log(e)
    }



  }


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

      <Spacing marginBottom={'-10'} />

      <ButtonCadastrar onPress={() => createAccount()} disabled={loading} >
        {loading ? 
          <ActivityIndicator color={'#CAA858'} />   
        :
          <TextButton>Cadastrar</TextButton>
        }
      </ButtonCadastrar>

      <MadeBy height={height}>Made by Gamel Tec</MadeBy>
    </ContainerLogo>


  );
};

export default CreateAccount;
