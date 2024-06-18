import {
    Container,
    HomeContainer,
    StatusButtonContainer,
} from '../../components/container/style';
import {
    LatoBold20Dourado,
    LatoLight16Creme,
    LatoRegular20Creme,
} from '../../components/texts/style';
import {
    Header,
    BoxHeader,
    ImageButton,
    ImageProfile,
    BodyHome,
} from './Style';
import {Calendar} from '../../components/calendar/calendar';
import {useEffect, useState} from 'react';
import moment from 'moment';
import {
    ButtonEditar,
    ButtonStatus,
} from '../../components/packageButton/packageButton';
import {CardList, CardListPendente} from '../../components/cardList/cardList';
import {BudgetSummary} from '../../components/budgetSummary/budgetSummary';
import api from '../../service/service';
import {userDecodeToken} from '../../utils/auth';
import CreateModal from '../../components/createModal/createModal';
import {CreateEventButton} from "../../components/createEventButton/createEventButton";
import { useRoute } from '@react-navigation/native';
import {ActivityIndicator} from "react-native";

const Home = ({navigation}) => {
    // state para mostrar ícone de carregamento para o usuároi
    const [loadingEvent, setLoadingEvent] = useState(false);
    // state para filtrar as chamadas e status do
    const [statusLista, setStatusLista] = useState('pendente');
    const [calendarDate, setCalendarDate] = useState('');
	const { params } = useRoute()

    // * Criando o state para ver se o modal esta visivel ou nao
    const [isModalVisible, setModalVisible] = useState(false);

    // * Criando um state para verificar qual card foi selecionado para transpor ao modal
    const [selectedCard, setSelectedCard] = useState();


    //criando state para o modal de criar cadastro
    const [createModalVisible, setCreateModalVisible] = useState(false)


    const [user, setUser] = useState({
        aud: '',
        email: '',
        exp: '',
        foto: '',
        iss: '',
        jti: '',
        name: '',
        role: ''
    })

    const [eventos, setEventos] = useState()

    // * Criacao da funcao de pressionar o card e levar dados ao modal

    const handleCardPress = (card) => {
        if (card.Situacao !== 'cancelado') {
            setSelectedCard(card);
            setModalVisible(true);
        }
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedCard(null);
    };

    async function loadEvents() {
        try {
            setLoadingEvent(true)
            const res = await api.get('/Evento/BuscarPorData?data=' + encodeURIComponent(calendarDate));

            const data = await res.data;

            if (data.length > 0 && data[0].statusEvento === 'Aprovado') {
                setStatusLista('Aprovado')
            } else {
                setStatusLista('Pendente')
            }
            setEventos(data)
        } catch (e) {
            console.log(e)
        }
        setLoadingEvent(false)
    }

    async function loadUser() {
        const userCode = await userDecodeToken();
        setUser(userCode)
    }

    useEffect(() => {
        setCalendarDate(moment().format('DD/MM/YYYY'));

        loadEvents()
        loadUser()
    }, []);


    useEffect(() => {
        loadEvents()
    }, [calendarDate]);

    return (
        <HomeContainer>
            <Container>
                <Header>
                    <BoxHeader>
                        <LatoLight16Creme>Bem vindo!</LatoLight16Creme>
                        <LatoRegular20Creme>{user.name}</LatoRegular20Creme>
                    </BoxHeader>

                    <ImageButton
                        onPress={() => {
                            navigation.navigate('Profile');
                        }}
                    >
                        <ImageProfile
                            source={{uri: user.foto}}
                        />
                    </ImageButton>
                </Header>

                <Calendar setCalendarDate={setCalendarDate}/>

                <BodyHome>
                    {statusLista === 'Pendente' ? (
                        <>
                            <LatoBold20Dourado>Pendente</LatoBold20Dourado>

                            {
                                loadingEvent ?
                                    <ActivityIndicator color={'#caa858'} size={'large'}/>
                                    :
                                    <CardList
                                        statusLista={statusLista}
                                        cardsData={eventos}
                                        onPress={handleCardPress}
                                        loading={loadingEvent}
                                    />
                            }

                            {/* // * Se o card for selecionado ele vai levar os dados */}
                            {selectedCard && (
                                <BudgetSummary
                                    visible={isModalVisible}
                                    onClose={closeModal}
                                    cardData={selectedCard}
                                    statusLista={statusLista}
                                />
                            )}
                        </>
                    ) : (
                        <>
                            <StatusButtonContainer>
                                <ButtonStatus
                                    onPress={() => setStatusLista('Aprovado')}
                                    clickButton={statusLista === 'Aprovado'}
                                    textButton={'Aprovado'}
                                />
                                <ButtonStatus
                                    onPress={() => setStatusLista('Cancelado')}
                                    clickButton={statusLista === 'Cancelado'}
                                    textButton={'Cancelado'}
                                />
                            </StatusButtonContainer>
                            {
                                loadingEvent ?
                                    <ActivityIndicator color={'#caa858'} size={'large'}/>
                                    :
                                    <CardList
                                        statusLista={statusLista}
                                        cardsData={eventos}
                                        onPress={handleCardPress}
                                    />
                            }
                            {selectedCard && (
                                <BudgetSummary
                                    visible={isModalVisible}
                                    onClose={closeModal}
                                    cardData={selectedCard}
                                    statusLista={statusLista}
                                />
                            )}
                        </>
                    )}
                </BodyHome>
                <CreateModal user={user} visible={createModalVisible} setVisible={setCreateModalVisible}/>

                <CreateEventButton onPress={setCreateModalVisible}/>
            </Container>
        </HomeContainer>
    );
};

export default Home;
