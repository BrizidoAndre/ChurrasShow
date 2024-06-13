
import Input from '../../components/input/input';
import { ContainerPerfil, ContainerPerfilScroll, Header, ImageProfile, Body, Footer, ImageButton } from './Style';
import { ButtonEditar } from '../../components/packageButton/packageButton';
import { Link } from '../../components/Link/Link';
import { useEffect, useState } from 'react';
import { LatoRegular14Creme, LatoRegular20Creme } from '../../components/texts/style';
import { userDecodeToken } from '../../utils/auth';
import api from '../../service/service';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Profile = ({ navigation }) => {
    const [isEditing, useIsEditing] = useState(true)

    const [userData, setUserData] = useState({
        id: '',
        name: '',
        email: '',
        cpf: '',
        rg: '',
        cidade: '',
        logradouro: '',
        foto: '',
    })

    async function userDataLoad() {
        const token = await userDecodeToken()



        if (token !== null) {

            await api.get(`/Usuario/${token.id}`)
                .then(response => {
                    console.log(response.data)


                    setUserData({
                        ...userData,
                        id: token.id,
                        name: response.data.name,
                        email: response.data.email,
                        cpf: response.data.cpf,
                        rg: response.data.rg,
                        cidade: response.data.cidade,
                        logradouro: response.data.logradouro,
                        foto: response.data.image_src

                    })

                }).catch(error => {
                    console.log(error)
                })

        }
    }

    async function updateUserData() {
        try {
            await api.put(`/Usuario/AtualizarUsuario?id=${userData.id}`, {
                name: userData.name,
                rg: userData.rg,
                cpf: userData.cpf,
                logradouro: userData.logradouro,
                cidade: userData.cidade
            })

            console.log(`Dados atualizado`)
        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {

        userDataLoad()
        console.log(userData)
        console.log(`Link da Foto:${userData.foto}`)

    }, [])

    return (
        <>
            <ContainerPerfilScroll>
                <ContainerPerfil>
                    <Header>
                        <LatoRegular20Creme>SEU PERFIL</LatoRegular20Creme>


                        {
                            isEditing ? (

                                <>
                                    <ImageProfile source={{uri:`${userData.foto}`}} />

                                    <LatoRegular14Creme>{userData.name} - {userData.email}</LatoRegular14Creme>

                                </>

                            ) : (
                                <>
                                    <ImageButton>
                                        <ImageProfile source={require('../../assets/ProfilePicture01.png')} />
                                    </ImageButton>

                                    <LatoRegular14Creme>Clique na imagem para editar a foto</LatoRegular14Creme>

                                </>

                            )
                        }



                    </Header>

                    {
                        isEditing ? (
                            <Body>
                                <Input editable={false} value={userData.name} />
                                <Input editable={false} value={userData.cpf} />
                                <Input editable={false} value={userData.rg} />
                                <Input editable={false} value={userData.logradouro} />
                                <Input editable={false} value={userData.cidade} />
                            </Body>
                        ) : (
                            <Body>
                                <Input
                                    editable={true}
                                    value={userData.name}
                                    setValue={(txt) => {
                                        setUserData({
                                            ...userData,
                                            name: txt
                                        })
                                    }}
                                />
                                <Input
                                    editable={true}
                                    value={userData.cpf}
                                    setValue={(txt) => {
                                        setUserData({
                                            ...userData,
                                            cpf: txt
                                        })
                                    }}
                                />

                                <Input
                                    editable={true}
                                    value={userData.rg}
                                    setValue={(txt) => {
                                        setUserData({
                                            ...userData,
                                            rg: txt
                                        })
                                    }}
                                />

                                <Input
                                    editable={true}
                                    value={userData.logradouro}
                                    setValue={(txt) => {
                                        setUserData({
                                            ...userData,
                                            logradouro: txt
                                        })
                                    }}
                                />
                                <Input
                                    editable={true}
                                    value={userData.cidade}
                                    setValue={(txt) => {
                                        setUserData({
                                            ...userData,
                                            cidade: txt
                                        })
                                    }}
                                />
                            </Body>

                        )
                    }


                    <Footer>
                        {isEditing ? (
                            <>
                                <ButtonEditar
                                    textButton={"Editar"}
                                    onPress={() => { useIsEditing(false) }}
                                />

                                <Link
                                    textLink={'Sair da Conta'}
                                    fontSize={14}
                                    color={'F2E6D0'}
                                    onPress={() => { navigation.navigate('FirstPage'), AsyncStorage.removeItem('token')
                                }}
                                />
                            </>

                        ) : (
                            <>
                                <ButtonEditar
                                    textButton={"Salvar"}
                                    onPress={() => { useIsEditing(true), updateUserData() }}
                                />

                                <Link
                                    textLink={'Voltar'}
                                    fontSize={14}
                                    color={'F2E6D0'}
                                    onPress={() => { useIsEditing(true) }}
                                />
                            </>
                        )}


                    </Footer>
                </ContainerPerfil>

            </ContainerPerfilScroll>

        </>

    )
}



export default Profile;