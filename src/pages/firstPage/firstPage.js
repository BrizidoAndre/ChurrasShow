import React, { useEffect, useState } from 'react';
import { Container } from '../../components/container/style';
import img from '../../assets/logo.png';
import { Logotipo } from '../../components/logo/style';
import { ButtonLogin, TextButton } from '../../components/button/style';
import CommentCard from '../../components/commentCard/commentCard';
import { CommentFlatlist } from '../../components/commentFlatlist/styles';
import CreateModal from '../../components/createModal/createModal';
import { ActivityIndicator, useWindowDimensions } from 'react-native';
import api from '../../service/service';
import { MadeBy } from '../../components/texts/style';

const FirstPage = ({ navigation }) => {
	const [isModalVisible, setModalVisible] = useState(false);
	const [comments, setComments] = useState([])

	const { width, height } = useWindowDimensions();


	async function loadComments(){

		const res = await api.get('/Comentario/ListarComentariosValidos')
		const data = await res.data;
		setComments(data)
	} 

	useEffect(()=>{
		loadComments()
	},[])

	return (
		<Container>
			<Logotipo source={img} />
			<ButtonLogin onPress={()=> navigation.navigate('Login')}>
				<TextButton>Orçamento</TextButton>
			</ButtonLogin>

			<CommentFlatlist
				data={comments}
				renderItem={({ item }) => (
					<CommentCard
						img={item.usuario.foto }
						name={item.usuario.nome}
						comment={item.descricaoComentario}
						stars={item.pontuacao}
					/>
				)}
				keyExtractor={(item) => item.idComentario.toString()} // keyExtractor espera uma string
				horizontal={true}
				ListEmptyComponent={<ActivityIndicator size={'large'} color={'#caa858'} style={{marginLeft:150}} />}
			/>

			<MadeBy height={height}>Made by Gamel Tec</MadeBy>

			<CreateModal visible={isModalVisible} />
		</Container>
	);
};

export default FirstPage;
