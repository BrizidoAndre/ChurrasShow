
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

const Home = ({ navigation }) => {
	const [statusLista, setStatusLista] = useState('pendente');
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

	const ListBudgets = [
		{
			id: 1,
			title: 'PACOTE BÁSICO',
			convidados: '100 CONVIDADOS',
			duracao: 'DURAÇÃO: 4h',
			Situacao: 'agendado',
			image: 'image 1.png',
		},
		{
			id: 2,
			title: 'PACOTE PREMIUM',
			convidados: '150 CONVIDADOS',
			duracao: 'DURAÇÃO: 6h',
			Situacao: 'cancelado',
			image: 'image 2.png',
		},
		{
			id: 3,
			title: 'PACOTE BÁSICO',
			convidados: '100 CONVIDADOS',
			duracao: 'DURAÇÃO: 2h',
			Situacao: 'pendente',
			image: 'image 1.png',
		},
		{
			id: 4,
			title: 'PACOTE PREMIUM',
			convidados: '150 CONVIDADOS',
			duracao: 'DURAÇÃO: 6h',
			Situacao: 'pendente',
			image: 'image 2.png',
		},
	];

	async function loadEvents() {
		const res = await api.get('/Evento/BuscarPorData?data=22%2F10%2F2024');

		const data = await res.data;
	}

	async function loadUser() {
		const userCode = await userDecodeToken();
		setUser(userCode)
		console.log('Usuário')
		console.log(userCode)
	}

	useEffect(() => {
		setCalendarDate(moment().format('YYYY-MM-DD'));
		navigation.navigate('Main');

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
							source={{uri: user.foto}}
						/>
					</ImageButton>
				</Header>

				<Calendar setCalendarDate={setCalendarDate} />

				<BodyHome>
					{statusLista == 'pendente' ? (
						<>
							<LatoBold20Dourado>Pendentes</LatoBold20Dourado>

							<CardList
								statusLista={statusLista}
								cardsData={ListBudgets}
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
								cardsData={ListBudgets}
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
								onPress={() => setStatusLista('pendente')}
							/>
						</>
					)}
				</BodyHome>
				{/* <Button title="ir para a navegação" onPress={() => { navigation.navigate('Main') }} /> */}
			</Container>
		</HomeContainer>
	);
};

export default Home;
