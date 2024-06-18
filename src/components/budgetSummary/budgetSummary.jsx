import React, { useEffect, useState } from 'react';
import { Alert, Modal, ScrollView, TouchableOpacity, View } from 'react-native';
import {
	ContentCreateModal,
	CreateModalX,
	TitleModal,
} from '../createModal/style';
import {
	ButtonBudgetModal,
	ContentBudgetModal,
	ContentButton,
	ContentSummary,
	ContentSummaryData,
	ContentSummaryDescriptions,
	DescriptionsPlusSummary,
	SubDescriptionData,
	TextButtonModal,
	TitleSummary,
} from './style';
import { ButtonModal, TextButton } from '../button/style';
import { ButtonText } from '../packageButton/style';
import { Back } from '../back/back';
import { dateBeautify } from '../../utils/date';
import { ContainerCream } from '../container/style';
import Spacing from '../spacing/spacing';
import api from '../../service/service';
import CommentModal from '../commentModal/commentModal';

export const BudgetSummary = ({ visible, onClose, cardData, statusLista }) => {
	const [dateEvent, setEventDate] = useState({
		hour: '',
		date: '',
	});

	const [isCommentModalVisible, setCommentModalVisible] = useState(false);

	function loadData() {
		console.log(cardData._idEvento);
		setEventDate(dateBeautify(cardData.dataHoraEvento));
	}

	useEffect(() => {
		loadData();
	}, []);

	async function cancelarOrcamento(id) {
		const res = await api.put('/Evento/AtualizarStatus?id=' + id, {
			idStatusEvento: '3786ca9b-8a94-4f1a-8a3e-0154dcf9a798',
		});
		const data = await res.data;
		Alert.alert(
			'Confirmação concluída',
			'Seu evento foi aprovado corretamente',
		);
		onClose();
	}

	async function aprovarOrcamento(id) {
		const res = await api.put('/Evento/AtualizarStatus?id=' + id, {
			idStatusEvento: '787fd592-c85c-4049-ba5d-7a28f15795e1',
		});
		const data = await res.data;
		Alert.alert('Cancelado', 'Seu evento foi devidamente cancelado');
		onClose();
	}

	// * se o card nao existe ele retorna null
	if (!cardData) return null;

	return (
		<Modal visible={visible} transparent={true} animationType="fade">
			{/* //? importacao dos contents do modal */}
			<CreateModalX>
				<ContentBudgetModal>
					{/*  */}

					{/*//? IMportacao do title modal */}
					<TitleModal>RESUMO DO ORÇAMENTO</TitleModal>

					{/* //? importacao dos conteudos do orcamento */}
					<ContentSummary>
						<ScrollView>
							{/* //? importacao do title do resumo */}
							<TitleSummary>{cardData.nomePacote}</TitleSummary>

							{/* importacao do componente de conteudo dos dados do evento */}
							<ContentSummaryData>
								{/* // ? importacao dos dados */}
								<SubDescriptionData>
									{dateEvent.date}
								</SubDescriptionData>

								<SubDescriptionData>
									{dateEvent.hour} h
								</SubDescriptionData>

								<SubDescriptionData>
									{cardData.duracaoEvento} Horas de duração
								</SubDescriptionData>

								<SubDescriptionData>
									{cardData.quantidadePessoasEvento} Pessoas
								</SubDescriptionData>

								<SubDescriptionData>
									{cardData.garconete} Garçonetes
								</SubDescriptionData>
								{/*  */}
							</ContentSummaryData>

							{/* //? importacao do content que segura as descricoes dos plus */}
							<ContentSummaryDescriptions>
								{/* //? importacao dos componentes de texto de descricoes dos plus */}
								<DescriptionsPlusSummary>
									{cardData.descricaoPacote}
								</DescriptionsPlusSummary>
								{/* //! */}
								{cardData.acompanhamentos ? (
									<DescriptionsPlusSummary>
										Acompanhamentos: Arroz/ Farofa/ Salada
										de maionese/ Vinagrete.
									</DescriptionsPlusSummary>
								) : null}

								{/* //! */}
								{cardData.descartaveis ? (
									<DescriptionsPlusSummary>
										Descartáveis: Pratos/ Talheres/
										Guardanapos.
									</DescriptionsPlusSummary>
								) : null}

								{/* //! */}

								<Spacing marginBottom={'3'} />
								{/*  */}
							</ContentSummaryDescriptions>

							{/*  */}
						</ScrollView>
						{/*  */}
					</ContentSummary>

					{/* //? importacao do componente de content dos botoes */}
					<ContentButton>
						{/* //? importacao do botao */}

						{/* //? importacao do texto do botao */}
						{statusLista === 'Pendente' ? (
							<ButtonBudgetModal
								onPress={() =>
									aprovarOrcamento(cardData._idEvento)
								}
							>
								<TextButtonModal>Aprovar</TextButtonModal>
							</ButtonBudgetModal>
						) : (
							<ButtonBudgetModal>
								<TextButtonModal>Comentar</TextButtonModal>
							</ButtonBudgetModal>
						)}

						{/*  */}
						<ButtonBudgetModal
							onPress={() =>
								cancelarOrcamento(cardData._idEvento)
							}
						>
							<TextButtonModal>Cancelar</TextButtonModal>
						</ButtonBudgetModal>
						{/*  */}
					</ContentButton>

					{/* //? importacao do voltar */}

					<Back onPress={onClose}>Voltar</Back>
				</ContentBudgetModal>
			</CreateModalX>

			{/* Adicione o CommentModal */}
			{isCommentModalVisible && (
				<CommentModal
					visible={isCommentModalVisible}
					onClose={() => setCommentModalVisible(false)}
					cardData={cardData}
				/>
			)}
		</Modal>
	);
};
