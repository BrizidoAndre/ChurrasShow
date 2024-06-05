import React from 'react';
import { Modal } from 'react-native';
import {
	ContainerPackageButton,
	ContentCreateModal,
	CreateModalX,
} from './style';
import { PackageButton } from '../packageButton/packageButton';

// * criacao do componente de modal de cadastro de orcamento *

export const CreateModal = ({ visible }) => {
	return (
		<Modal visible={visible} transparent={true} animationType="fade">
			{/* <CreateModalX> */}
			<ContentCreateModal>
				{/* IMportacao do titleModal */}
				<TitleModal>SELEÇÂO DE PACOTE</TitleModal>

				{/* // ? Importacao do conteiner do button */}
				<ContainerPackageButton>
					{/* // ? Importacao do componente do buttonPackage */}
					<PackageButton textButton="Teste" />
				</ContainerPackageButton>

				<PackageButton />
			</ContentCreateModal>
			{/* </CreateModalX> */}
		</Modal>
	);
};

export default CreateModal;
