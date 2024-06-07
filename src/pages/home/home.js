import { Button, View } from "react-native"
import { ButtonLogin, TextButton } from "../../components/button/style"
import { CardPacotePremiumPendente } from "../../components/Card/Card"
import { Container, HomeContainer } from "../../components/container/style"
import { LatoLight16Creme, LatoRegular14Creme, LatoRegular15, LatoRegular20Creme } from "../../components/texts/style"
import { Header, BoxHeader, ImageButton, ImageProfile } from "./Style"
import { Body } from "../profile/Style"
import { Calendar } from "../../components/calendar/calendar"


const Home = ({ navigation }) => {

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

            <Calendar/>


            <Button title="ir para a navegação" onPress={() => { navigation.navigate('Main') }} />
            <Body>
                <LatoRegular14Creme>Pendententes</LatoRegular14Creme>
                {/* <CardList/> */}


            </Body>


        </HomeContainer>
    )
}

export default Home

