
import Input from '../../components/input/input';
import { ContainerPerfil, ContainerPerfilScroll, Header, ImageProfile, Body, Footer, ImageButton } from './Style';
import { ButtonEditar } from '../../components/packageButton/packageButton';
import { Link } from '../../components/Link/Link';
import { useEffect, useState } from 'react';
import { LatoRegular14Creme, LatoRegular20Creme } from '../../components/texts/style';
import { userDecodeToken } from '../../utils/auth';
import api from '../../service/service';



const Profile = ({ navigation }) => {
    const [isEditing, useIsEditing] = useState(true)

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        cpf: '',
        rg: '',
    })

    async function userDataLoad() {
        const token = await userDecodeToken()

        if (token !== null) {

            await api.get(`/Usuario/${token.id}`)
                .then(response => {

                    setUserData({
                        ...userData,
                        name: response.name,
                        email: response.email,
                        
                    })

                })
        }
    }

    useEffect(() => {

        userDataLoad()
        console.log(userData)

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
                                    <ImageProfile source={require('../../assets/ProfilePicture01.png')} />
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
                                <Input editable={false} value={userData.email} />
                                <Input editable={false} value={userData.cpf} />
                                <Input editable={false} value={userData.rg} />
                                <Input editable={false} value={"Rua Fernando Bollini, 09"} />
                                <Input editable={false} value={"São Paulo"} />
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
                                    value={userData.email}
                                    setValue={(txt) => {
                                        setUserData({
                                            ...userData,
                                            email: txt
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

                                <Input editable={true} value={"Endereço..."} />
                                <Input editable={true} value={"Cidade..."} />
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
                                    onPress={() => { navigation.navigate('FirstPage') }}
                                />
                            </>

                        ) : (
                            <>
                                <ButtonEditar
                                    textButton={"Salvar"}
                                    onPress={() => { useIsEditing(true) }}
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