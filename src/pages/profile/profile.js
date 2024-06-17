
import Input from '../../components/input/input';
import { ContainerPerfil, ContainerPerfilScroll, Header, ImageProfile, Body, Footer, ImageButton } from './Style';
import { ButtonEditar } from '../../components/packageButton/packageButton';
import { Link } from '../../components/Link/Link';
import { useEffect, useState, useRef } from 'react';
import { LatoRegular14Creme, LatoRegular20Creme } from '../../components/texts/style';
import { userDecodeToken } from '../../utils/auth';
import api from '../../service/service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CameraModal } from '../../components/camera/CameraModal/cameraModal';0
import * as MediaLibrary from 'expo-media-library'



const Profile = ({ navigation }) => {
    const [effet, setEffect] = useState('')
    const [photo, setPhoto] = useState(null)
    const cameraRef = useRef(null)

    const [isEditing, setIsEditing] = useState(true)

    const [openModal, setOpenModal] = useState(false)
    // const [loadModal, setLoadModal] = useState(false)

    const [uriCameraCapture, setUriCameraCapture] = useState({
        uri: 'https://blobchurrasshow.blob.core.windows.net/churrasshow/06af2ba51e884d4db7614ab208fe182b.exp',
        data: '',
    })

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

    async function SavePhoto() {
        if (photo) {
            await MediaLibrary.createAssetAsync(photo)
                .then(() => {
                    alert('Foto salva com sucesso');
                })
                .catch(error => {
                    alert('Erro ao salvar foto')
                })
        }
    }

    async function capturePhoto() {
        if (cameraRef) {
       
            const image = await cameraRef.current.takePictureAsync();

            setPhoto(image.uri)
            setUriCameraCapture({ data: image.uri })

            SavePhoto()
            setOpenModal(false)
        }

        if (photo) {
            await MediaLibrary.createAssetAsync(photo)
        }
    }

    async function loadUserData() {
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

    async function AlterarFotoPerfil() {

        const formData = new FormData();
        formData.append("Arquivo", {
            uri: uriCameraCapture.data,
            name: `image.${uriCameraCapture.data.split(".")[1]}`,
            type: `image/${uriCameraCapture.data.split(".")[1]}`
        })

        await api.put(`/Usuario/AlterarFotoPerfil?id=${userData.id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(async response => {
            setEffect('Adios')
            console.log('Adiosss');
        }).catch(error => {
            console.log(`Algo deu errado: ${error}`);
        })
    }


    useEffect(() => {
        console.log(uriCameraCapture);
        AlterarFotoPerfil()
        loadUserData()
    }, [uriCameraCapture])

    
    useEffect(() => {
        AlterarFotoPerfil()
        loadUserData()
        

    }, [])

    useEffect(() => {
        AlterarFotoPerfil()
        loadUserData()
    }, [effet])


    return (
        <>
            <ContainerPerfilScroll>
                <ContainerPerfil>
                    <Header>
                        <LatoRegular20Creme>SEU PERFIL</LatoRegular20Creme>


                        {
                            isEditing ? (

                                <>
                                    <ImageProfile source={{ uri: userData.foto }} />

                                    <LatoRegular14Creme>{userData.name} - {userData.email}</LatoRegular14Creme>

                                </>

                            ) : (
                                <>
                                    <ImageButton onPress={() => { setOpenModal(!openModal) }} >
                                        <ImageProfile source={{ uri: userData.foto }} />
                                    </ImageButton>

                                    <LatoRegular14Creme>Clique na imagem para uma nova foto</LatoRegular14Creme>

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

                                {/* Verfica se os inputs tem um componente vázio ou não. Caso esteja vázio, ele entrega o 'value = Endereço..'  */}
                                {
                                    userData.logradouro == null || userData.cidade == null ? (
                                        <>
                                            <Input editable={false} value={'Endereço...'} />
                                            <Input editable={false} value={'Cidade...'} />
                                        </>

                                    ) : (
                                        <>
                                            <Input editable={false} value={userData.logradouro} />
                                            <Input editable={false} value={userData.cidade} />
                                        </>
                                    )
                                }

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
                                    onPress={() => { setIsEditing(false) }}
                                />

                                <Link
                                    textLink={'Sair da Conta'}
                                    fontSize={14}
                                    color={'F2E6D0'}
                                    onPress={() => {
                                        navigation.navigate('FirstPage'), AsyncStorage.removeItem('token')
                                    }}
                                />
                            </>

                        ) : (
                            <>
                                <ButtonEditar
                                    textButton={"Salvar"}
                                    onPress={() => { setIsEditing(true), updateUserData() }}
                                />

                                <Link
                                    textLink={'Voltar'}
                                    fontSize={14}
                                    color={'F2E6D0'}
                                    onPress={() => { setIsEditing(true) }}
                                />
                            </>
                        )}


                    </Footer>
                </ContainerPerfil>

            </ContainerPerfilScroll>

            <CameraModal
                cameraRef={cameraRef}
                getMediaLibrary={true}
                openModal={openModal}
                setOpenModal={setOpenModal}
                capturePhoto={capturePhoto}
            />
        </>

    )
}



export default Profile;