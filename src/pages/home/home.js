import { Button, View } from "react-native"
import { ButtonLogin, TextButton } from "../../components/button/style"
import { CardPacotePremiumPendente } from "../../components/Card/Card"
import { Container, HomeContainer, StatusButtonContainer } from "../../components/container/style"
import { LatoLight16Creme, LatoRegular14Creme, LatoRegular15, LatoRegular20Creme } from "../../components/texts/style"
import { Header, BoxHeader, ImageButton, ImageProfile } from "./Style"
import { Body } from "../profile/Style"
import { Calendar } from "../../components/calendar/calendar"
import { useEffect, useState } from "react"
import moment from "moment"
import { ButtonEditar, ButtonStatus } from "../../components/packageButton/packageButton"
import { CardList, CardListPendente } from "../../components/cardList/cardList"


const Home = ({ navigation }) => {

    const [statusLista, setStatusLista] = useState('agendado')
    const [budgetAccept, setBudgetAccept] = useState(false)
    const [calendarDate, setCalendarDate] = useState('')
    const [cardsDataList, setCardsDataList] = useState([])

    const ListBudgets = [
        {
            id: 1,
            title: 'PACOTE BÁSICO',
            data: ['100 convidados', 'Duração: 4h'],
            Situacao: 'agendado'
        },
        {
            id: 2,
            title: 'PACOTE PREMIUM',
            data: ['150 convidados', 'Duração: 6h'],
            Situacao: 'cancelado'
        },
        {
            id: 3,
            title: 'PACOTE PREMIUM',
            data: ['150 convidados', 'Duração: 6h'],
            Situacao: 'pendente'
        },
        {
            id: 4,
            title: 'PACOTE PREMIUM',
            data: ['150 convidados', 'Duração: 6h'],
            Situacao: 'pendente'
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
    }, [])


    return (
        <HomeContainer>
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


            <Button title="ir para a navegação" onPress={() => { navigation.navigate('Main') }} />
            <Body>

                {
                    statusLista == 'pendente' ? (
                        <>
                            <LatoRegular14Creme>Pendententes</LatoRegular14Creme>
                            <CardListPendente
                                statusLista={statusLista}
                                cardsData={cardsDataList}
                            />

                            <ButtonEditar
                                textButton={'Orçamento'}
                                onPress={() => setBudgetAccept(true)}
                            />
                        </>
                    ) : (

                        <>
                            <LatoRegular14Creme>Ageddo e Cancelado</LatoRegular14Creme>

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
                                cardsData={cardsDataList}

                            />



                            <ButtonEditar
                                textButton={'Orçamento'}
                                onPress={() => setBudgetAccept(false)}
                            />
                        </>
                    )
                }






            </Body>


        </HomeContainer>
    )
}

export default Home

