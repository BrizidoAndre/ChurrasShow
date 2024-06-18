import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {CardPacoteBasico, CardPacoteBasicoPendente} from '../Card/Card';
import {ContainerFlatList, ContainerFlatListScroll} from '../container/style';
import {ListCard} from './style';


import img from '../../assets/image 1.png'
import {LatoBoldUnderline} from "../texts/style";

export const CardList = ({statusLista, cardsData, onPress }) => {
    return (
        <ListCard
            data={cardsData}
            keyExtractor={(item) => item._id}
            renderItem={({item}) =>
                statusLista === item.statusEvento && (
                    <TouchableOpacity onPress={() => onPress(item)}>
                        <CardPacoteBasico
                            id={item._id}
                            situacao={item.statusEvento}
                            guests={item.quantidadePessoasEvento}
                            duration={item.duracaoEvento}
                            packageName={item.nomePacote}
                            img={item.img}
                            preco={item.valorTotal}
                        />
                    </TouchableOpacity>
                )
            }
            ListEmptyComponent={
                <LatoBoldUnderline>Nenhum evento cadastrado para esse dia</LatoBoldUnderline>
            }
        />
    );
};
