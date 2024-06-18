import { useState } from "react";
import { BottomRowButtonContainer, CameraPermissionContainer } from "../../container/style";
import { TrueModal } from "../style";



// import das bibliotecas
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Entypo } from "@expo/vector-icons";

// import do axios
import { ActivityIndicator } from "react-native";
import { SubTitle } from "../../createModal/subTitles/subTitles";
import { LatoBold20Dourado } from "../../texts/style";

export const CameraModal = ({ openModal, setOpenModal, capturePhoto, cameraRef }) => {

    const [facing, setFacing] = useState('back')
    const [permission, requestPermission] = useCameraPermissions()


    if (!permission) {
        return (<><ActivityIndicator /></>)
    }

    if (!permission.granted) {

        return (
            <CameraPermissionContainer>
                <LatoBold20Dourado>Nós precisamos da sua permissão para usar a câmera</LatoBold20Dourado>
                <SubTitle text={'Clique no ícone para requisitar a permissão'} />
                <Entypo name="lock-open" size={48} color="white" onPress={() => requestPermission()} />
            </CameraPermissionContainer>
        )
    }

    


    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }


    return (
        <TrueModal
            animationType="slide"
            transparent={false}
            visible={openModal}>
            <CameraView
                ref={cameraRef}
                facing={facing}
                style={{ width: "100%", height: "100%", flex: 1, position: "relative" }}
            />
            <BottomRowButtonContainer>
                <Entypo name="arrow-bold-left" size={48} color="white" onPress={() => setOpenModal(false)} />
                <Entypo name="circle" size={48} color="white" onPress={() => capturePhoto()} />
                <Entypo name="cycle" size={48} color="white" onPress={() => toggleCameraFacing()} />
            </BottomRowButtonContainer>

        </TrueModal>
    )
}