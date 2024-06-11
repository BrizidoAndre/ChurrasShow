import { Image, SectionList, Text, View } from "react-native"
import { CardContainer, BoxImage, BoxText, TitleList, BoxCard, PriceText, BoxTextPrice, FoodImage } from "./Style"

export const CardPacoteBasico = ({ id, situacao, guests, duration, packageName, img }) => {

    return (
        <CardContainer>
            <BoxCard>
                
                {
                    packageName === 'PACOTE PREMIUM' ? (
                        <BoxImage>
                            <FoodImage source={require(`../../assets/image 2.png`)} />
                        </BoxImage>
                    ) : (
                        <BoxImage>
                            <FoodImage source={require(`../../assets/image 1.png`)} />
                        </BoxImage>
                    )
                }


                <BoxText>


                    <TitleList>{packageName}</TitleList>


                    <View>
                        <Text> - {guests}</Text>

                        <Text> - {duration}</Text>
                    </View>


                    {
                        situacao == 'pendente' ? (
                            <BoxTextPrice>
                                <PriceText>R$0000,00</PriceText>

                                <Image source={require('../../assets/PerfilCard.png')} />

                            </BoxTextPrice>

                        ) : (

                            <>
                                <PriceText>R$0000,00</PriceText>
                            </>
                        )
                    }


                </BoxText>
            </BoxCard>

        </CardContainer>
    )
}


