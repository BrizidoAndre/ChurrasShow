import React, { useState } from 'react';
import { Modal, Text } from 'react-native';
import {
	ContainerPackageButton,
	ContentCreateModal,
	CreateModalX,
	NumberOfGuests,
	TitleModal,
} from './style';
import { PackageButton } from '../packageButton/packageButton';

import { SubTitle } from './subTitles/subTitles';
import { ContentComponentsX } from './contentComponents/style';
import { ButtonDate } from './buttonDate/buttonDate';
import { ButtonTime } from './buttonTime/buttonTime';
import { DurationButton } from './durationButton/durationButton';
import { ToggleSwitch } from './toggleSwitch/toggleSwitch';
import { Back } from '../back/back';
import { ViewDescription } from './viewDescription/viewDescription';
import { ButtonModal } from '../button/style';
import { ButtonText } from '../packageButton/style';

// * criacao do componente de modal de cadastro de orcamento *

const CreateModal = ({ visible, onClose, navigation }) => {
	const [selectedButton, setSelectedButton] = useState(null);

	const handlePress = (buttonId) => {
		setSelectedButton(buttonId);
	};

	return (
		<Modal visible={visible} transparent={true} animationType="fade">
			<CreateModalX>
				<ContentCreateModal>
					{/* // ?Importacao do titleModal */}
					<TitleModal>SELEÇÃO DE PACOTE</TitleModal>

					{/* // ?Importacao do conteiner do button */}
					<ContainerPackageButton>
						{/* //? Importacao do componente do buttonPackage */}
						<PackageButton
							textButton="Basico"
							isSelected={selectedButton === 1}
							onPress={() => handlePress(1)}
						/>
						<PackageButton
							textButton="Premium"
							isSelected={selectedButton === 2}
							onPress={() => handlePress(2)}
						/>
						<PackageButton
							textButton="Custom"
							isSelected={selectedButton === 3}
							onPress={() => handlePress(3)}
						/>
					</ContainerPackageButton>

					{/* //?Importação do componente que vai segurar os subtitles e os inputs normais e selects */}
					<ContentComponentsX>
						{/* //?Importacao dos subtitles e textos */}
						<SubTitle text={'DATA DO EVENTO:'} />
						{/* //?Importacao do botao de selecionar data */}
						<ButtonDate />
					</ContentComponentsX>

					<ContentComponentsX>
						<SubTitle text={'HORÁRIO DE INÍCIO:'} />
						{/* //?Importacao do componente de selecionar o horário */}
						<ButtonTime />
					</ContentComponentsX>

					<ContentComponentsX>
						<SubTitle text={'DURAÇÃO:'} />
						{/* //?Importacao do componente de adicionar a duracao do evento */}
						<DurationButton />
					</ContentComponentsX>

					<ContentComponentsX>
						<SubTitle text={'N° DE CONVIDADOS:'} />
						{/* //?Importacao do componente de input de convidados */}
						<NumberOfGuests placeholder={'0'} />
					</ContentComponentsX>

					<ContentComponentsX>
						<SubTitle text={'GARÇONTES:'} />
						<DurationButton />
					</ContentComponentsX>

					<ContentComponentsX>
						<SubTitle text={'DESCARTÁVEIS:'} />
						{/* //? importacao do componente toggleSwitch para validar se o cliente vai querer ou nao */}
						<ToggleSwitch />
					</ContentComponentsX>

					<ContentComponentsX>
						<SubTitle text={'ACOMPANHAMENTOS:'} />
						<ToggleSwitch />
					</ContentComponentsX>
					{/* Renderização condicional da descrição */}
					{selectedButton !== null && (
						<ContentComponentsX>
							<ViewDescription />
						</ContentComponentsX>
					)}
					<ButtonModal>
						<ButtonText>Confirmar</ButtonText>
					</ButtonModal>
					<Back onPress={onClose} />
				</ContentCreateModal>
			</CreateModalX>
		</Modal>
	);
};

export default CreateModal;

// const CreateModal = ({ visible, onClose }) => {
// 	const [selectedButton, setSelectedButton] = useState(null);

// 	const handlePress = (buttonId) => {
// 		setSelectedButton(buttonId);
// 	};

// 	return (
// 		<Modal visible={visible} transparent={true} animationType="fade">
// 			<CreateModalX>
// 				<ContentCreateModal>
// 					{/* Importação do TitleModal */}
// 					<TitleModal>SELEÇÃO DE PACOTE</TitleModal>

// 					{/* Importação do contêiner do botão */}
// 					<ContainerPackageButton>
// 						{/* Importação do componente do PackageButton */}
// 						<PackageButton
// 							textButton="Básico"
// 							isSelected={selectedButton === 1}
// 							onPress={() => handlePress(1)}
// 						/>
// 						<PackageButton
// 							textButton="Premium"
// 							isSelected={selectedButton === 2}
// 							onPress={() => handlePress(2)}
// 						/>
// 						<PackageButton
// 							textButton="Custom"
// 							isSelected={selectedButton === 3}
// 							onPress={() => handlePress(3)}
// 						/>
// 					</ContainerPackageButton>

// 					{/* Importação do componente que vai segurar os subtitles e os inputs normais e selects */}
// 					<ContentComponentsX>
// 						{/* Importação dos subtitles e textos */}
// 						<SubTitle text={'DATA DO EVENTO:'} />
// 						{/* Importação do botão de selecionar data */}
// 						<ButtonDate />
// 					</ContentComponentsX>

// 					<ContentComponentsX>
// 						<SubTitle text={'HORÁRIO DE INÍCIO:'} />
// 						{/* Importação do componente de selecionar o horário */}
// 						<ButtonTime />
// 					</ContentComponentsX>

// 					<ContentComponentsX>
// 						<SubTitle text={'DURAÇÃO:'} />
// 						{/* Importação do componente de adicionar a duração do evento */}
// 						<DurationButton />
// 					</ContentComponentsX>

// 					<ContentComponentsX>
// 						<SubTitle text={'N° DE CONVIDADOS:'} />
// 						{/* Importação do componente de input de convidados */}
// 						<NumberOfGuests placeholder={'0'} />
// 					</ContentComponentsX>

// 					<ContentComponentsX>
// 						<SubTitle text={'GARÇONTES:'} />
// 						<DurationButton />
// 					</ContentComponentsX>

// 					<ContentComponentsX>
// 						<SubTitle text={'DESCARTÁVEIS:'} />
// 						<ToggleSwitch />
// 					</ContentComponentsX>

// 					<ContentComponentsX>
// 						<SubTitle text={'ACOMPANHAMENTOS:'} />
// 					</ContentComponentsX>

// 					{/* Renderização condicional da descrição */}
// 					{selectedButton !== null && (
// 						<ContentComponentsX>
// 							<ViewDescription />
// 						</ContentComponentsX>
// 					)}

// 					{/* Botão de Voltar */}
// 					<Back onPress={onClose} />
// 				</ContentCreateModal>
// 			</CreateModalX>
// 		</Modal>
// 	);
// };

// export default CreateModal;
