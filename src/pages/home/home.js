import { Button, View } from "react-native"
import { ButtonLogin, TextButton } from "../../components/button/style"
import { CardPacotePremiumPendente } from "../../components/Card/Card"
import { Container, ContainerFlatList, HomeContainer, StatusButtonContainer } from "../../components/container/style"
import { LatoBold20Dourado, LatoLight16Creme, LatoRegular14Creme, LatoRegular15, LatoRegular20Creme, LatoRegular20Dourado } from "../../components/texts/style"
import { Header, BoxHeader, ImageButton, ImageProfile, BodyHome } from "./Style"
import { Calendar } from "../../components/calendar/calendar"
import { useEffect, useState } from "react"
import moment from "moment"
import { ButtonEditar, ButtonStatus } from "../../components/packageButton/packageButton"
import { CardList, CardListPendente } from "../../components/cardList/cardList"


const Home = ({ navigation }) => {

    const [statusLista, setStatusLista] = useState('pendente')
    const [budgetAccept, setBudgetAccept] = useState(false)
    const [calendarDate, setCalendarDate] = useState('')
    const [cardsDataList, setCardsDataList] = useState([])

    const ListBudgets = [
        {
            id: 1,
            title: 'PACOTE BÁSICO',
            convidados: '100 CONVIDADOS',
            duracao: 'DURAÇÃO: 4h',
            Situacao: 'agendado',
            image: 'image 1.png'
        },
        {
            id: 2,
            title: 'PACOTE PREMIUM',
            convidados: '150 CONVIDADOS',
            duracao: 'DURAÇÃO: 6h',
            Situacao: 'cancelado',
            image: 'image 2.png'
        },
        {
            id: 3,
            title: 'PACOTE BÁSICO',
            convidados: '100 CONVIDADOS',
            duracao: 'DURAÇÃO: 4h',
            Situacao: 'pendente',
            image: 'image 1.png'
        },
        {
            id: 4,
            title: 'PACOTE PREMIUM',
            convidados: '150 CONVIDADOS',
            duracao: 'DURAÇÃO: 6h',
            Situacao: 'pendente',
            image: 'image 2.png'
        }

    ]

    async function budgetLockDay() {
        if (statusLista != 'pendente') {
            calendarDate == statusLista
        }
    }

    async function budgetAccepted() {
        if (budgetAccept == true) {
            setStatusLista('agendado')
        }
    }

    useEffect(() => {
        if (calendarDate !== '') {
            console.log(calendarDate)
            console.log(statusLista)
        }
    }, [calendarDate])

    useEffect(() => {
        budgetLockDay
        budgetAccepted()
        setCalendarDate((moment().format('YYYY-MM-DD')))
        navigation.navigate('Main')
    }, [])


    return (
        <HomeContainer>
            <Container>
                <Header>
                    <BoxHeader>
                        <LatoLight16Creme>Bem vindo!</LatoLight16Creme>
                        <LatoRegular20Creme>Nome da Pessoa</LatoRegular20Creme>
                    </BoxHeader>

                    <ImageButton onPress={() => { navigation.navigate('Profile') }}>
                        <ImageProfile source={require('../../assets/ProfilePicture01.png')} />
                    </ImageButton>
                </Header>

                <Calendar
                    setCalendarDate={setCalendarDate}
                />



                <BodyHome>

                    {
                        statusLista == 'pendente' ? (
                            <>
                                <LatoBold20Dourado>Pendentes</LatoBold20Dourado>


                                <CardList
                                    statusLista={statusLista}
                                    cardsData={ListBudgets}

                                />


                                <ButtonEditar
                                    textButton={'Agendado'}
                                    onPress={() => setStatusLista('agendado')}
                                />
                            </>
                        ) : (

                            <>

                                <StatusButtonContainer>
                                    <ButtonStatus
                                        onPress={() => setStatusLista('agendado')}
                                        clickButton={statusLista === 'agendado'}
                                        textButton={"Agendado"}
                                    />
                                    <ButtonStatus
                                        onPress={() => setStatusLista('cancelado')}
                                        clickButton={statusLista === 'cancelado'}
                                        textButton={"Cancelado"}
                                    />
                                </StatusButtonContainer>

                                <CardList
                                    statusLista={statusLista}
                                    cardsData={ListBudgets}

                                />



                                <ButtonEditar
                                     textButton={'Pendente'}
                                     onPress={() => setStatusLista('pendente')}
                                />
                            </>
                        )
                    }

                </BodyHome>
                {/* <Button title="ir para a navegação" onPress={() => { navigation.navigate('Main') }} /> */}

            </Container>








        </HomeContainer>






    )
}

export default Home

