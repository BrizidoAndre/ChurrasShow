import React, { useEffect, useState } from 'react';
import { Alert, Modal, TouchableOpacity } from 'react-native';
import {
	ContainerComment,
	ContainerRowStarModal,
	ContentCreateModal,
	CreateModalX,
	LatoComment,
	TitleModal,
} from './style';
import starFull from '../../assets/star.png';
import starEmpty from '../../assets/starEmpty.png';
import { ImageStar } from '../commentCard/styles';
import { ButtonModal } from '../button/style';
import { ButtonText } from '../packageButton/style';
import { Back } from '../back/back';
import { useRoute } from '@react-navigation/native';
import api from '../../service/service';

const CommentStars = ({ star, onChange }) => {
	const [score, setScore] = useState(star);
	const { params } = useRoute();

	const handleStarPress = (index) => {
		const newScore = index + 1;
		setScore(newScore);
		onChange(newScore);
	};

	const renderStars = () => {
		let arrayStar = [];
		for (let index = 0; index < 5; index++) {
			arrayStar.push(
				<TouchableOpacity
					key={index}
					onPress={() => handleStarPress(index)}
				>
					<ImageStar source={index < score ? starFull : starEmpty} />
				</TouchableOpacity>,
			);
		}
		return arrayStar;
	};

	useEffect(() => {
		setScore(star);
	}, [star]);

	return <ContainerRowStarModal>{renderStars()}</ContainerRowStarModal>;
};

export const CommentModal = ({ visible, stars, onClose, cardData }) => {
	const [userStars, setUserStars] = useState(stars);
	const [comment, setComment] = useState('');

	function loadData() {
		console.log(cardData._idEvento);
		console.log(cardData._idUsuario);
	}

	useEffect(() => {
		loadData();
	}, []);

	const handleStarsChange = (newStars) => {
		setUserStars(newStars);
	};

	async function handleConfirm() {
		console.log('Dados a serem enviados:', {
			descricaoComentario: comment,
			pontuacao: userStars,
			idEvento: cardData._idEvento,
			idUsuario: cardData._idUsuario,
		});

		try {
			const res = await api.post('/Comentario/ComentarioIA', {
				descricaoComentario: comment,
				pontuacao: userStars,
				idEvento: cardData._idEvento,
				idUsuario: cardData._idUsuario,
			});

			const data = await res.data;

			console.log(res.data);
			Alert.alert('Comentário cadastrado com sucesso!!');
		} catch (error) {
			console.error('Erro ao enviar o comentário:', error);
		}

		onClose();
	}

	return (
		<Modal visible={visible} transparent={true} animationType="fade">
			<CreateModalX>
				<ContentCreateModal>
					<TitleModal>COMENTÁRIO</TitleModal>
					<ContainerComment
						multiline
						numberOfLines={4}
						placeholder="Digite seu comentário..."
						value={comment}
						onChangeText={setComment}
					/>

					<CommentStars
						star={userStars}
						onChange={handleStarsChange}
					/>

					<ButtonModal onPress={() => handleConfirm()}>
						<ButtonText>Confirmar</ButtonText>
					</ButtonModal>
					<Back onPress={onClose} />
				</ContentCreateModal>
			</CreateModalX>
		</Modal>
	);
};

export default CommentModal;
