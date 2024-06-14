
import {
	Container,
	HomeContainer,
	StatusButtonContainer,
} from '../../components/container/style';
import {
	LatoBold20Dourado,
	LatoLight16Creme,
	LatoRegular20Creme,
} from '../../components/texts/style';
import {
	Header,
	BoxHeader,
	ImageButton,
	ImageProfile,
	BodyHome,
} from './Style';
import { Calendar } from '../../components/calendar/calendar';
import { useEffect, useState } from 'react';
import moment from 'moment';
import {
	ButtonEditar,
	ButtonStatus,
} from '../../components/packageButton/packageButton';
import { CardList, CardListPendente } from '../../components/cardList/cardList';
import { BudgetSummary } from '../../components/budgetSummary/budgetSummary';
import api from '../../service/service';
import { userDecodeToken } from '../../utils/auth';
import CreateModal from '../../components/createModal/createModal';

const Home = ({ navigation }) => {
	const [statusLista, setStatusLista] = useState('Pendente');
	const [calendarDate, setCalendarDate] = useState('');

	// * Criando o state para ver se o modal esta visivel ou nao
	const [isModalVisible, setModalVisible] = useState(false);

	// * Criando um state para verificar qual card foi selecionado para transpor ao modal
	const [selectedCard, setSelectedCard] = useState();


	const [user, setUser] = useState({
		aud: '',
		email: '',
		exp: '',
		foto: '',
		iss: '',
		jti: '',
		name: '',
		role: ''
	})

	const [eventos, setEventos] = useState({
		_id: "4d671553-649c-448d-a7a4-bed23412101d",
		nomeCliente: "André",
		dataHoraEvento: "2024-10-22T13:00:00",
		quantidadePessoasEvento: 5,
		duracaoEvento: 5,
		descartaveis: true,
		acompanhamentos: true,
		garconete: 1,
		confirmado: true,
		idPacote: "67104252-0e65-4c1e-95f7-337febd2f631",
		nomePacote: "Pacote Premium",
		descricaoPacote: "Experiencie o auge do sabor com o nosso Pacote Churrasco Premium. Este pacote exclusivo inclui uma seleção de carnes nobres como ancho, costela premium e cordeiro, todas preparadas e servidas por um churrasqueiro profissional. Acompanhamentos gourmet como salada de rúcula com parmesão, pães artesanais e molhos especiais complementam a refeição. Perfeito para ocasiões especiais que pedem um toque de sofisticação.",
		valorPorPessoa: 100,
		idEndereco: "b393d1cd-7098-46de-84de-6a4b44c18818",
		logradouro: "Rua Shiguera Ishii",
		cidade: "Santa América",
		uf: "SP",
		cep: 16455970,
		numero: 726,
		bairro: "Santa América",
		complemento: null,
		dataDeCriacao: "2024-06-12T08:10:08.777",
		statusEvento: "Aprovado",
		valorTotal: 725
	})

	// * Criacao da funcao de pressionar o card e levar dados ao modal

	const handleCardPress = (card) => {
		if (card.Situacao !== 'cancelado') {
			setSelectedCard(card);
			setModalVisible(true);
		}
	};

	const closeModal = () => {
		setModalVisible(false);
		setSelectedCard(null);
	};

	async function loadEvents() {
		console.log(calendarDate)
		const res = await api.get('/Evento/BuscarPorData?data=25%2F10%2F2024');

		const data = await res.data;
		setEventos(data)
	}

	async function loadUser() {
		const userCode = await userDecodeToken();
		setUser(userCode)
	}

	useEffect(() => {
		setCalendarDate(moment().format('YYYY-MM-DD'));

		loadEvents()
		loadUser()
	}, []);

	return (
		<HomeContainer>
			<Container>
				<Header>
					<BoxHeader>
						<LatoLight16Creme>Bem vindo!</LatoLight16Creme>
						<LatoRegular20Creme>{user.name}</LatoRegular20Creme>
					</BoxHeader>

					<ImageButton
						onPress={() => {
							navigation.navigate('Profile');
						}}
					>
						<ImageProfile
							source={{ uri: user.foto }}
						/>
					</ImageButton>
				</Header>

				<Calendar setCalendarDate={setCalendarDate} />

				<BodyHome>
					{statusLista == 'Pendente' ? (
						<>
							<LatoBold20Dourado>Pendentes</LatoBold20Dourado>

							<CardList
								statusLista={statusLista}
								cardsData={eventos}
								onPress={handleCardPress}
							/>
							{/* // * Se o card for selecionado ele vai levar os dados */}
							{selectedCard && (
								<BudgetSummary
									visible={isModalVisible}
									onClose={closeModal}
									cardData={selectedCard}
									statusLista={statusLista}
								/>
							)}
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
									textButton={'Agendado'}
								/>
								<ButtonStatus
									onPress={() => setStatusLista('cancelado')}
									clickButton={statusLista === 'cancelado'}
									textButton={'Cancelado'}
								/>
							</StatusButtonContainer>
							<CardList
								statusLista={statusLista}
								cardsData={eventos}
								onPress={handleCardPress}
							/>
							{selectedCard && (
								<BudgetSummary
									visible={isModalVisible}
									onClose={closeModal}
									cardData={selectedCard}
									statusLista={statusLista}
								/>
							)}
							<ButtonEditar
								textButton={'Pendente'}
								onPress={() => setStatusLista('Pendente')}
							/>
						</>
					)}
				</BodyHome>
				<CreateModal user={user}  />
			</Container>
		</HomeContainer>
	);
};

export default Home;
