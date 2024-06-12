import React, { useEffect, useState } from 'react';
import { Container } from '../../components/container/style';
import ContainerLogo from '../../components/container/container';
import Logo from '../../components/logo/logo';
import img from '../../assets/logo.png';
import { Logotipo } from '../../components/logo/style';
import { ButtonLogin, TextButton } from '../../components/button/style';
import { LatoBoldItalic15, MadeBy } from '../../components/texts/style';
import CommentCard from '../../components/commentCard/commentCard';
import { CommentFlatlist } from '../../components/commentFlatlist/styles';
import CreateModal from '../../components/createModal/createModal';
import { useNavigation } from '@react-navigation/native'; // Importação do useNavigation
import { useWindowDimensions } from 'react-native';

const FirstPage = ({ navigation }) => {
	const [isModalVisible, setModalVisible] = useState(false);

	const { width, height } = useWindowDimensions();

	const toggleModalVisibility = () => {
		setModalVisible(!isModalVisible);
	};

	const DATA = [
		{
			id: 1,
			name: 'Augusto Terceiros',
			comment:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....',
			image: img,
			stars: 4,
		},
		{
			id: 2,
			name: 'Nome2',
			comment:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....',
			image: img,
			stars: 3,
		},
		{
			id: 3,
			name: 'André',
			comment: 'Muito bom o serviço',
			image: img,
			stars: 5,
		},
	];

	const handleNavigate = () => {
		navigation.navigate('Login'); // Navegar para a tela 'Login'
	};

	return (
		<Container>
			<Logotipo source={img} />
			<ButtonLogin onPress={handleNavigate}>
				<TextButton>Orçamento</TextButton>
			</ButtonLogin>

			<CommentFlatlist
				data={DATA}
				renderItem={({ item }) => (
					<CommentCard
						img={item.image}
						name={item.name}
						comment={item.comment}
						stars={item.stars}
					/>
				)}
				keyExtractor={(item) => item.id.toString()} // keyExtractor espera uma string
				horizontal={true}
			/>

			<MadeBy height={height}>Made by Gamel Tec</MadeBy>

			<CreateModal visible={isModalVisible} />
		</Container>
	);
};

export default FirstPage;
