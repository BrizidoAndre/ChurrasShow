
import { CardPacoteBasico, CardPacoteBasicoPendente } from "../Card/Card"
import { ContainerFlatList, ContainerFlatListScroll } from "../container/style"
import { ListCard } from "./style"

// export const CardListPendente = ({ statusLista, cardsData }) => {

//     return (
//         <ListCard
//             data={cardsData}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => statusLista == item.Situacao && (


//                 <CardPacoteBasicoPendente
//                     id={item.id}
//                     situacao={item.Situacao}
//                     dados={item.data}
//                     packageName={item.title}

//                 />
//             )}

//         />


//     )

// }

export const CardList = ({ statusLista, cardsData }) => {
    return (
        <ListCard
            data={cardsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => statusLista == item.Situacao && (


                <CardPacoteBasico
                    id={item.id}
                    situacao={item.Situacao}
                    guests={item.convidados}
                    duration={item.duracao}
                    packageName={item.title}
                    img={item.image}

                />
            )}

        />
    )
}