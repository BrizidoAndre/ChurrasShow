import React, {useEffect, useState} from 'react';
import {Alert, Modal, ScrollView, Text} from 'react-native';
import {
    ContainerPackageButton,
    ContentCreateModal,
    CreateModalX,
    NumberOfGuests,
    TitleModal,
} from './style';
import {PackageButton} from '../packageButton/packageButton';

import {SubTitle} from './subTitles/subTitles';
import {ContentComponentsX, ContentDescriptionComponent} from './contentComponents/style';
import {ButtonDate} from './buttonDate/buttonDate';
import {ButtonTime} from './buttonTime/buttonTime';
import {DurationButton} from './durationButton/durationButton';
import {ToggleSwitch} from './toggleSwitch/toggleSwitch';
import {Back} from '../back/back';
import {ViewDescription} from './viewDescription/viewDescription';
import {ButtonModal} from '../button/style';
import {ButtonText} from '../packageButton/style';
import api from '../../service/service';
import {CreateEventButton} from "../createEventButton/createEventButton";

// * criacao do componente de modal de cadastro de orcamento *

const CreateModal = ({user, visible, setVisible, navigation}) => {

    const [selectedButton, setSelectedButton] = useState(1);
    const [descriptionText, setDescriptionText] = useState('Ideal para encontros casuais, o Pacote Churrasco Básico oferece uma seleção de carnes essenciais para um churrasco saboroso e acessível. Inclui cortes como picanha, asa de frango e linguiça, acompanhados de farofa, vinagrete e pão de alho. Este pacote é perfeito para quem deseja uma opção econômica sem abrir mão do sabor.');

    // useStates para o cadastro de Evento
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [duracao, setDuracao] = useState(0)
    const [convidados, setConvidados] = useState(0)
    const [garconetes, setGarconetes] = useState(0)
    const [descartavel, setDescartavel] = useState(false)
    const [acompanhamento, setAcompanhamento] = useState(false)
    const [idPacote, setIdPacote] = useState()

    const handlePressText = (buttonId) => {
        setSelectedButton(buttonId);
        let description = '';
        switch (buttonId) {
            case 1:
                description = 'Ideal para encontros casuais, o Pacote Churrasco Básico oferece uma seleção de carnes essenciais para um churrasco saboroso e acessível. Inclui cortes como picanha, asa de frango e linguiça, acompanhados de farofa, vinagrete e pão de alho. Este pacote é perfeito para quem deseja uma opção econômica sem abrir mão do sabor.';
                break;
            case 2:
                description = 'Experiencie o auge do sabor com o nosso Pacote Churrasco Premium. Este pacote exclusivo inclui uma seleção de carnes nobres como ancho, costela premium e cordeiro, todas preparadas e servidas por um churrasqueiro profissional. Acompanhamentos gourmet como salada de rúcula com parmesão, pães artesanais e molhos especiais complementam a refeição. Perfeito para ocasiões especiais que pedem um toque de sofisticação.';
                break;
            case 3:
                description = 'Pacote customizado. Converse com nossos Moderadores para mais detalhes';
                break;
            default:
                description = '';
        }
        setDescriptionText(description);
    };

    // com base no botão inserido ela retorna o id correto do pacote selecionado
    function getIdPacote(id) {
        switch (id) {
            case 1:
                return '6e75f73d-ef70-4d56-b291-f7bf4791a544';
            case 2:
                return 'fb5a8590-7ed5-49fc-87a9-551f8a276fc0';
            case 3:
                return '91f604c9-210a-4caf-8070-dbf565e4b069';
        }
    }


    // função que cria um evento com base nas informações dadas pelo formulário e
    // pelo token de identificação
    async function createEvent() {
        try {
            console.log(selectedDate);
            const idPacote = getIdPacote(selectedButton);

            const res = await api.post('/Evento', {
                dataHoraEvento: selectedDate,
                quantidadePessoasEvento: convidados,
                duracaoEvento: duracao,
                descartaveis: descartavel,
                acompanhamentos: acompanhamento,
                garconete: garconetes,
                confirmado: false,
                idPacotes: idPacote,
                idUsuario: user.id,
                idStatusEvento: '85ff68f5-ac18-4a5a-a500-374ce5bfb813',
                logradouro: 'Rua Casa Bonita',
                cidade: 'Santo André',
                numero: '40'
            })

            const data = await res.data;
            console.log(data);

            setVisible(false)

            Alert.alert('Sucesso', 'Seu orçamento foi cadastrado com sucesso!')

        } catch (error) {
            console.log(error)
        }
    }



    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <CreateModalX>
                <ContentCreateModal>
                    {/* // ?Importacao do titleModal */}
                    <TitleModal>SELEÇÃO DE PACOTE</TitleModal>

                    {/* // ?Importacao do conteiner do button */}
                    <ContainerPackageButton>
                        {/* //? Importacao do componente do buttonPackage */}
                        <PackageButton
                            textButton="Basico"
                            isSelected={selectedButton === 1}
                            onPress={() => handlePressText(1)}
                        />
                        <PackageButton
                            textButton="Premium"
                            isSelected={selectedButton === 2}
                            onPress={() => handlePressText(2)}
                        />
                        <PackageButton
                            textButton="Custom"
                            isSelected={selectedButton === 3}
                            onPress={() => handlePressText(3)}
                        />
                    </ContainerPackageButton>

                    {/* //?Importação do componente que vai segurar os subtitles e os inputs normais e selects */}
                    <ContentComponentsX>
                        {/* //?Importacao dos subtitles e textos */}
                        <SubTitle text={'DATA DO EVENTO:'}/>
                        {/* //?Importacao do botao de selecionar data */}
                        <ButtonDate selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                    </ContentComponentsX>

                    <ContentComponentsX>
                        <SubTitle text={'HORÁRIO DE INÍCIO:'}/>
                        {/* //?Importacao do componente de selecionar o horário */}
                        <ButtonTime selectedTime={selectedTime} setSelectedTime={setSelectedTime}/>
                    </ContentComponentsX>

                    <ContentComponentsX>
                        <SubTitle text={'DURAÇÃO (em horas):'}/>
                        {/* //?Importacao do componente de adicionar a duracao do evento */}
                        <DurationButton durationTime={duracao} setDurationTime={setDuracao}/>
                    </ContentComponentsX>

                    <ContentComponentsX>
                        <SubTitle text={'N° DE CONVIDADOS:'}/>
                        {/* //?Importacao do componente de input de convidados */}
                        <NumberOfGuests
                            placeholder={'0'}
                            keyboardType="numeric"
                            onChangeText={(txt) => {
                                setConvidados(txt)
                            }}
                            value={convidados}
                        />
                    </ContentComponentsX>

                    <ContentComponentsX>
                        <SubTitle text={'GARÇONETES:'}/>
                        <DurationButton durationTime={garconetes} setDurationTime={setGarconetes}/>
                    </ContentComponentsX>

                    <ContentComponentsX>
                        <SubTitle text={'DESCARTÁVEIS:'}/>
                        {/* //? importacao do componente toggleSwitch para validar se o cliente vai querer ou nao */}
                        <ToggleSwitch isOn={descartavel} setIsOn={setDescartavel}/>
                    </ContentComponentsX>

                    <ContentComponentsX>
                        <SubTitle text={'ACOMPANHAMENTOS:'}/>
                        <ToggleSwitch isOn={acompanhamento} setIsOn={setAcompanhamento}/>
                    </ContentComponentsX>
                    {/* Renderização condicional da descrição note que ela recebe maior customização no estilo */}
                    {selectedButton !== null && (
                        <ContentComponentsX style={{height:160, alignItems:'flex-start'} }>
                            <ScrollView>
                                <ViewDescription text={descriptionText}/>
                            </ScrollView>
                        </ContentComponentsX>
                    )}
                    <ButtonModal onPress={() => createEvent()}>
                        <ButtonText>Confirmar</ButtonText>
                    </ButtonModal>
                    <Back onPress={() => setVisible(false)}/>
                </ContentCreateModal>
            </CreateModalX>
        </Modal>
    );
};

export default CreateModal;
