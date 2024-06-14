import React, { useEffect, useState } from 'react';
import { Modal, ScrollView, TouchableOpacity, View } from 'react-native';
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

export const BudgetSummary = ({ visible, onClose, cardData, statusLista }) => {

	const [dateEvent, setEventDate] = useState({
		hour: '',
		date: '',
	})


	function loadData() {
		console.log(dateBeautify(cardData.dataHoraEvento))
		setEventDate(dateBeautify(cardData.dataHoraEvento));
	}

	useEffect(() => {
		loadData()
	}, [])

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
								<SubDescriptionData>{dateEvent.date}</SubDescriptionData>

								<SubDescriptionData>{dateEvent.hour} h</SubDescriptionData>

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
								{cardData.acompanhamentos ? <DescriptionsPlusSummary>
									Acompanhamentos: Arroz/ Farofa/ Salada de
									maionese/ Vinagrete.
								</DescriptionsPlusSummary>: null}
								
								{/* //! */}
								{cardData.descartaveis ? <DescriptionsPlusSummary>
									Descartáveis: Pratos/ Talheres/ Guardanapos.
								</DescriptionsPlusSummary>: null}
								
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
						<ButtonBudgetModal>
							{/* //? importacao do texto do botao */}
							{statusLista === 'Pendente' ? (
								<TextButtonModal>Aprovar</TextButtonModal>
							) : (
								<TextButtonModal>Comentar</TextButtonModal>
							)}
						</ButtonBudgetModal>
						{/*  */}
						<ButtonBudgetModal>
							<TextButtonModal>Cancelar</TextButtonModal>
						</ButtonBudgetModal>
						{/*  */}
					</ContentButton>

					{/* //? importacao do voltar */}

					<Back onPress={onClose}>Voltar</Back>
				</ContentBudgetModal>
			</CreateModalX>
		</Modal>
	);
};
