import { CardPacoteBasico, CardPacoteBasicoPendente } from "../Card/Card"
import { ListCard } from "./style"

export const CardList = ({ statusLista, cardsData }) => {

    return (
        <ListCard
            data={cardsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => statusLista == item.Situacao && (


                <CardPacoteBasicoPendente


                />
            )}

        />


    )

}

export const CardListPendente = ({ statusLista, cardsData }) => {
    return (
        <ListCard
            data={cardsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => statusLista == item.Situacao && (


                <CardPacoteBasico


                />
            )}

        />
    )
}