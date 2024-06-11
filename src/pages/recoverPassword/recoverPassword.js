
import ContainerLogo from "../../components/container/container";
import { ButtonCadastrar, ButtonLogin, TextButton } from "../../components/button/style";
import { LatoRegular15, LatoRegular25, MadeBy, Title } from "../../components/texts/style";
import Input from "../../components/input/input";
import { ContainerForm } from "../../components/container/style";
import Spacing from "../../components/spacing/spacing";
import { useWindowDimensions } from "react-native";

const RecoverPassword = ({navigation}) => {
  const{width, height} = useWindowDimensions()
  return (
    <ContainerLogo>
      <Title>Recuperar Senha</Title>

      <LatoRegular25>Digite o Email usado no login</LatoRegular25>
      <Spacing marginTop={'10'}/>
      <ContainerForm>
        <Input placeholder={"Email..."} />       
      </ContainerForm>

      <ButtonCadastrar onPress={() => {navigation.navigate('CheckEmail')}}>
        <TextButton>Continuar</TextButton>
      </ButtonCadastrar>

      <MadeBy height={height}>Made by Gamel Tec</MadeBy>
    </ContainerLogo>

    
  );
};

export default RecoverPassword;
