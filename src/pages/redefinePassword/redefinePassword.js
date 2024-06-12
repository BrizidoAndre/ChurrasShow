import ContainerLogo from "../../components/container/container"
import { LatoRegular25, MadeBy, Title } from "../../components/texts/style"
import Input from "../../components/input/input"
import { ButtonLogin, TextButton } from "../../components/button/style"
import { ActivityIndicator, useWindowDimensions } from "react-native"
import { ContainerForm } from "../../components/container/style"
import Spacing from "../../components/spacing/spacing"
import { useState } from "react"
import api from "../../service/service"

const RedefinePassword = ({ navigation, route }) => {

    const { width, height } = useWindowDimensions()

    const { email } = route.params;

    const [senhas, setSenhas] = useState({
        senha: '',
        confirmSenha: '',
    })
    const [loading, setLoading] = useState(false)


    async function redefinePassword() {
        setLoading(true)
        try {
            const res = await api.put('/Usuario/AlterarSenha?email=' + encodeURIComponent(email), {
                'senhaNova': senhas.senha
            })

            navigation.navigate('Login')

        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }


    return (
        <ContainerLogo>
            <Title>Redefinir Senha</Title>

            <ContainerForm>
                <LatoRegular25>Digite sua nova senha</LatoRegular25>

                <Input
                    placeholder={'Senha....'}
                    value={senhas.senha}
                    setValue={(txt) => {
                        setSenhas({
                            ...senhas,
                            senha: txt
                        })
                    }}
                    secure={true} />
                <Input
                    placeholder={'Confirmar Senha....'}
                    value={senhas.confirmSenha}
                    setValue={(txt) => {
                        setSenhas({
                            ...senhas,
                            confirmSenha: txt
                        })
                    }}
                    secure={true} />
            </ContainerForm>

            <Spacing marginTop={'20'} />

            <ButtonLogin onPress={() => redefinePassword()} disabled={loading}>
                {loading ?
                    <ActivityIndicator color={'#CAA858'} />
                    :
                    <TextButton>
                        Continuar
                    </TextButton>
                }

            </ButtonLogin>

            <MadeBy height={height}>Made by Gamel Tec</MadeBy>

        </ContainerLogo>
    )
}

export default RedefinePassword