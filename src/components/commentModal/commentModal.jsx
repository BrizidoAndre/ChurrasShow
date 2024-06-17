import React, { useEffect, useState } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
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

const CommentStars = ({ star, onChange}) => {
	const [score, setScore] = useState(star);

	const handleStarPress = (index) => {
		const newScore = index + 1;
		setScore(newScore);
		onChange(newScore);
	};

	const renderStars = () => {
		let arrayStar = [];
		for (let index = 0; index < 5; index++) {
			arrayStar.push(
				<TouchableOpacity key={index} onPress={() => handleStarPress(index)}>
					<ImageStar source={index < score ? starFull : starEmpty} />
				</TouchableOpacity>
			);
		}
		return arrayStar;
	};

	useEffect(() => {
		setScore(star);
	}, [star]);

	return (
		<ContainerRowStarModal>
			{renderStars()}
		</ContainerRowStarModal>
	);
};

export const CommentModal = ({ visible, stars, onClose }) => {
	const [userStars, setUserStars] = useState(stars);
	const [comment, setComment] = useState('');

	const handleStarsChange = (newStars) => {
		setUserStars(newStars);
	};

	const handleConfirm = () => {
		// Salvar o comentário e a pontuação
		const userCommentData = {
			descricaoComentario: comment,
			pontuacao: userStars,
		};
		// Aqui você pode enviar `userCommentData` para seu backend ou processá-lo como necessário
		console.log(userCommentData);

		// Fechar o modal
		onClose();
	};

	return (
		<Modal visible={visible} transparent={true} animationType="fade">
			<CreateModalX>
				<ContentCreateModal>
					<TitleModal>COMENTÁRIO</TitleModal>
					<ContainerComment>
						<LatoComment
							multiline
							/* numberOfLines={4} */
							placeholder= "Digite seu comentário..."
							value={comment}
							onChangeText={setComment}
						/>
					</ContainerComment>

					<CommentStars star={userStars} onChange={handleStarsChange} />

					<ButtonModal onPress={handleConfirm}>
						<ButtonText>Confirmar</ButtonText>
					</ButtonModal>
					<Back onPress={onClose} />
				</ContentCreateModal>
			</CreateModalX>
		</Modal>
	);
};

export default CommentModal;
