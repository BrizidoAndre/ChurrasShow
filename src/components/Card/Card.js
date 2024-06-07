import { Image, SectionList, Text, View } from "react-native"
import { CardContainer, BoxImage, BoxText, TitleList, BoxCard, PriceText, BoxTextPrice, FoodImage } from "./Style"

export const CardPacoteBasico = () => {

    return (
        <CardContainer>
            <BoxCard>
                <BoxImage>
                    <FoodImage source={require('../../assets/image 1.png')} />
                </BoxImage>

                <BoxText>
                    <SectionList
                        sections={PacoteBasico}
                        keyExtractor={(item, index) => item + index}

                        renderItem={({ item }) => (
                            <View>
                                <Text> - {item}</Text>
                            </View>
                        )}
                        renderSectionHeader={({ section: { title } }) => (
                            <TitleList>{title}</TitleList>
                        )}
                    />

                    <PriceText>R$0000,00</PriceText>

                </BoxText>
            </BoxCard>

        </CardContainer>
    )
}

export const CardPacotePremium = () => {

    const PacotePremium = [
        {
            title: 'PACOTE PREMIUM',
            data: ['150 convidados', 'Duração: 6h']
        }
    ]

    return (
        <CardContainer>
            <BoxCard>
                <BoxImage>
                    <FoodImage source={require('../../assets/image 2.png')} />
                </BoxImage>

                <BoxText>

                    <SectionList
                        sections={PacotePremium}
                        keyExtractor={(item, index) => item + index}

                        renderItem={({ item }) => (
                            <View>
                                <Text> - {item}</Text>
                            </View>
                        )}
                        renderSectionHeader={({ section: { title } }) => (
                            <TitleList>{title}</TitleList>
                        )}
                    />

                    <PriceText>R$0000,00</PriceText>
                </BoxText>
            </BoxCard>

        </CardContainer>
    )
}

export const CardPacoteBasicoPendente = () => {
    const PacoteBasico = [
        {
            title: 'PACOTE BÁSICO',
            data: ['100 convidados', 'Duração: 4h']
        }
    ]

    return (
        <CardContainer>
            <BoxCard>
                <BoxImage>
                    <FoodImage source={require('../../assets/image 1.png')} />
                </BoxImage>

                <BoxText>
                    <SectionList
                        sections={PacoteBasico}
                        keyExtractor={(item, index) => item + index}

                        renderItem={({ item }) => (
                            <View>
                                <Text> - {item}</Text>
                            </View>
                        )}
                        renderSectionHeader={({ section: { title } }) => (
                            <TitleList>{title}</TitleList>
                        )}
                    />
                    <BoxTextPrice>
                        <PriceText>R$0000,00</PriceText>

                        <Image source={require('../../assets/PerfilCard.png')} />

                    </BoxTextPrice>

                </BoxText>
            </BoxCard>

        </CardContainer>
    )
}

export const CardPacotePremiumPendente = () => {

 

    return (
        <CardContainer>
            <BoxCard>
                <BoxImage>
                    <FoodImage source={require('../../assets/image 2.png')} />
                </BoxImage>

                <BoxText>

                    <SectionList
                        sections={PacotePremium}
                        keyExtractor={(item, index) => item + index}

                        renderItem={({ item }) => (
                            <View>
                                <Text> - {item}</Text>
                            </View>
                        )}
                        renderSectionHeader={({ section: { title } }) => (
                            <TitleList>{title}</TitleList>
                        )}
                    />

                    <BoxTextPrice>

                        <PriceText>
                            R$0000,00
                        </PriceText>


                        <Image source={require('../../assets/PerfilCard.png')} />

                    </BoxTextPrice>
                </BoxText>
            </BoxCard>

        </CardContainer>
    )
}