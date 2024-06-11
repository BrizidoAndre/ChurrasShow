import React from 'react';
import { Modal, TouchableOpacity } from 'react-native';
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

export const BudgetSummary = ({ visible, onClose, navigation }) => {
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
						{/* //? importacao do title do resumo */}
						<TitleSummary>Pacote Premium</TitleSummary>

						{/* importacao do componente de conteudo dos dados do evento */}
						<ContentSummaryData>
							{/* // ? importacao dos dados */}
							<SubDescriptionData>30/12/2024</SubDescriptionData>
							<SubDescriptionData>19:00h</SubDescriptionData>
							<SubDescriptionData>4h</SubDescriptionData>
							<SubDescriptionData>
								100 Convidados
							</SubDescriptionData>
							<SubDescriptionData>
								1 Garçonetes
							</SubDescriptionData>
							{/*  */}
						</ContentSummaryData>

						{/* //? importacao do content que segura as descricoes dos plus */}
						<ContentSummaryDescriptions>
							{/* //? importacao dos componentes de texto de descricoes dos plus */}
							<DescriptionsPlusSummary>
								Linguiça/ Tulipa/ Panceta/ Picanha/ Fraldinha/
								Bife Ancho ou Bife de Chorizo/ Pão de Alho/
								Queijo Coalho/ Carvão.
							</DescriptionsPlusSummary>
							{/* //! */}
							<DescriptionsPlusSummary>
								Acompanhamentos: Arroz/ Farofa/ Salada de
								maionese/ Vinagrete.
							</DescriptionsPlusSummary>
							{/* //! */}
							<DescriptionsPlusSummary>
								Descartáveis: Pratos/ Talheres/ Guardanapos.
							</DescriptionsPlusSummary>
							{/* //! */}
						</ContentSummaryDescriptions>
						{/*  */}
					</ContentSummary>

					{/* //? importacao do componente de content dos botoes */}
					<ContentButton>
						{/* //? importacao do botao */}
						<ButtonBudgetModal>
							{/* //? importacao do texto do botao */}
							<TextButtonModal>Confirmar</TextButtonModal>
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
