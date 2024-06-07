import React, { useState } from 'react';
import { Modal, Text } from 'react-native';
import {
	ContainerPackageButton,
	ContentCreateModal,
	CreateModalX,
	TitleModal,
} from './style';
import { PackageButton } from '../packageButton/packageButton';

import { SubTitle } from './subTitles/subTitles';
import { ContentComponentsX } from './contentComponents/style';

// * criacao do componente de modal de cadastro de orcamento *

export const CreateModal = ({ visible }) => {
	const [selectedButton, setSelectedButton] = useState(null);

	const handlePress = (buttonId) => {
		setSelectedButton(buttonId);
	};
	return (
		<Modal visible={visible} transparent={true} animationType="fade">
			<CreateModalX>
				<ContentCreateModal>
					{/* IMportacao do titleModal */}
					<TitleModal>SELEÇÂO DE PACOTE</TitleModal>

					{/* // ? Importacao do conteiner do button */}
					<ContainerPackageButton>
						{/* // ? Importacao do componente do buttonPackage */}
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
					{/* //? Importação do componente que vai segurar os subtitles e os inputs normais e selects */}
					<ContentComponentsX>
						<SubTitle text={'DATA DO EVENTO:'} />
					</ContentComponentsX>
					{/*  */}
					<ContentComponentsX>
						<SubTitle text={'HORARIO DE INICIO:'} />
					</ContentComponentsX>
					{/*  */}
					<ContentComponentsX>
						<SubTitle text={'DURACAO:'} />
					</ContentComponentsX>
					{/*  */}
					<ContentComponentsX>
						<SubTitle text={'N° DE CONVIDADOS:'} />
					</ContentComponentsX>
					{/*  */}
					<ContentComponentsX>
						<SubTitle text={'GARÇONTES:'} />
					</ContentComponentsX>
					{/*  */}
					<ContentComponentsX>
						<SubTitle text={'DESCARTAVEIS:'} />
					</ContentComponentsX>
					{/*  */}
					<ContentComponentsX>
						<SubTitle text={'ACONPAHAMENTOS:'} />
					</ContentComponentsX>
					{/*  */}
				</ContentCreateModal>
			</CreateModalX>
		</Modal>
	);
};

export default CreateModal;
