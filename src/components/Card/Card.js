import { Image, SectionList, Text, View } from "react-native"
import { CardContainer, BoxImage, BoxText, TitleList, BoxCard, PriceText, BoxTextPrice, FoodImage } from "./Style"
import {useEffect} from "react";

export const CardPacoteBasico = ({ id, situacao, guests, duration, packageName, img, preco }) => {

    useEffect(() => {
        console.log(img)
    }, []);
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
                        <Text>Nº de convidados - {guests}</Text>

                        <Text>Q. de horas - {duration}</Text>
                    </View>


                    {
                        situacao === 'Pendente' ? (
                            <BoxTextPrice>
                                <PriceText>R${preco}</PriceText>

                                <Image style={{width:35,height:35, borderRadius:200}} source={{uri: img}}/>

                            </BoxTextPrice>

                        ) : (

                            <>
                                <PriceText>R${preco}</PriceText>
                            </>
                        )
                    }


                </BoxText>
            </BoxCard>

        </CardContainer>
    )
}


