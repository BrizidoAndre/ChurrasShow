
import Input from '../../components/input/input';
import { ContainerPerfil, ContainerPerfilScroll, Header, ImageProfile, Body, Footer, ImageButton } from './Style';
import { ButtonEditar } from '../../components/packageButton/packageButton';
import { Link } from '../../components/Link/Link';
import { useState } from 'react';
import { LatoRegular14Creme, LatoRegular20Creme } from '../../components/texts/style';



const Profile = ({ navigation }) => {
    const [isEditing, useIsEditing] = useState(true)

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
                                <Input editable={false} label={"Gamel"} />
                                <Input editable={false} label={"teste@gmail.com"} />
                                <Input editable={false} label={"09090909090"} />
                                <Input editable={false} label={"Rua Fernando Bollini, 09"} />
                                <Input editable={false} label={"São Paulo"} />
                            </Body>
                        ) : (
                            <Body>
                                <Input editable={true} label={"Username..."} />
                                <Input editable={true} label={"Email..."} />
                                <Input editable={true} label={"CPF..."} />
                                <Input editable={true} label={"Endereço..."} />
                                <Input editable={true} label={"Cidade..."} />
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