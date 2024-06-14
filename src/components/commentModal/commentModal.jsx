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
import { useRoute } from '@react-navigation/native';

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
		console.log(params.data)
	}, [star]);

	return (
		<ContainerRowStarModal>
			{renderStars()}
		</ContainerRowStarModal>
	);
};

export const CommentModal = ({ visible, stars, onClose, navigation: { setParams } }) => {
	const [userStars, setUserStars] = useState(stars);
	const [comment, setComment] = useState('');
	const { params } = useRoute()

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
	/* 	console.log(params); */

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

/* 
import React, { useEffect, useState } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import {
	ContainerComment,
	ContainerPackageButton,
	ContainerRowStarModal,
	ContentCreateModal,
	CreateModalX,
	LatoComment,
	TitleModal,
} from './style';
import starFull from '../../assets/star.png';
import starEmpty from '../../assets/starEmpty.png';
import { ImageStar } from '../commentCard/styles';

import { LatoRegular15 } from '../texts/style';
import { ContainerRowStar } from '../container/style';
import { ButtonModal } from '../button/style';
import { ButtonText } from '../packageButton/style';
import { Back } from '../back/back';

const CommentStars = ({ star, onChange }) => {
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

// * criacao do componente de modal de cadastro de orcamento *

export const CommentModal = ({ visible, stars, onClose }) => {
	const [userStars, setUserStars] = useState(stars);

	const handleStarsChange = (newStars) => {
		setUserStars(newStars);
	};

	return (
		<Modal visible={visible} transparent={true} animationType="fade">
			<CreateModalX>
				<ContentCreateModal>
					{/* /* IMportacao do titleModal/*  
					<TitleModal>COMENTÁRIO</TitleModal>
					<ContainerComment>
						<LatoComment>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						</LatoComment>
					</ContainerComment>

					<CommentStars star={userStars} onChange={handleStarsChange} />

					<ButtonModal>
						<ButtonText>Confirmar</ButtonText>
					</ButtonModal>
					<Back onPress={onClose} />
				</ContentCreateModal>
			</CreateModalX>
		</Modal>
	);
};

export default CommentModal; */