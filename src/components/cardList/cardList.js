import { TouchableOpacity } from 'react-native';
import { CardPacoteBasico, CardPacoteBasicoPendente } from '../Card/Card';
import { ContainerFlatList, ContainerFlatListScroll } from '../container/style';
import { ListCard } from './style';


import img from '../../assets/image 1.png'

export const CardList = ({ statusLista, cardsData, onPress }) => {
	return (
		<ListCard
			data={cardsData}
			keyExtractor={(item) => item._id}
			renderItem={({ item }) =>
				statusLista === item.statusEvento && (
					<TouchableOpacity onPress={() => onPress(item)}>
						<CardPacoteBasico
							id={item._id}
							situacao={item.statusEvento}
							guests={item.quantidadePessoasEvento}
							duration={item.duracaoEvento}
							packageName={item.nomePacote}
							img={img}
							preco={item.valorTotal}
						/>
					</TouchableOpacity>
				)
			}
		/>
	);
};
