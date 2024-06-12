
import ContainerLogo from "../../components/container/container";
import { ButtonCadastrar, ButtonLogin, TextButton } from "../../components/button/style";
import { LatoRegular15, LatoRegular25, MadeBy, Title } from "../../components/texts/style";
import Input from "../../components/input/input";
import { ContainerForm } from "../../components/container/style";
import Spacing from "../../components/spacing/spacing";
import { ActivityIndicator, useWindowDimensions } from "react-native";
import { useState } from "react";
import api from "../../service/service";

const RecoverPassword = ({ navigation }) => {
  const { width, height } = useWindowDimensions()

  const [email, setEmail] = useState()
  const [error, setError] = useState()

  const [loading, setLoading] = useState(false)

  async function recoverPassword() {
    try {
      setLoading(true)

      const res = await api.post('/RecuperarSenha?email=' + encodeURIComponent(email))


      navigation.navigate('CheckEmail')

      setLoading(false)
    } catch (error) {
      console.log(error)
      setError(true)
    }

    setLoading(false)
  }




  return (
    <ContainerLogo>
      <Title>Recuperar Senha</Title>

      <LatoRegular25>Digite o Email usado no login</LatoRegular25>
      <Spacing marginTop={'10'} />
      <ContainerForm>

        <Input
          placeholder={"Email..."}
          setValue={(txt) => setEmail(txt)}
          value={email}
          hasError={error && email.length < 1}
        />
      </ContainerForm>

      <ButtonCadastrar onPress={() => recoverPassword()} disabled={loading}>
        {loading ?
          <ActivityIndicator color={'#CAA858'} />
          :
          <TextButton>
            Continuar
          </TextButton>
        }

      </ButtonCadastrar>

      <MadeBy height={height}>Made by Gamel Tec</MadeBy>
    </ContainerLogo>


  );
};

export default RecoverPassword;
