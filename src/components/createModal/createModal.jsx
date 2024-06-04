import React from 'react';
import { Modal } from 'react-native';
import { ContentCreateModal, CreateModalX } from './style';

// * criacao do componente de modal de cadastro de orcamento *

export const CreateModal = ({ visible }) => {
	return (
		<Modal visible={visible} transparent={true} animationType="fade">
			{/* <CreateModalX> */}
			<ContentCreateModal>
				<TitleModal>SELEÇÂO DE PACOTE</TitleModal>
			</ContentCreateModal>
			{/* </CreateModalX> */}
		</Modal>
	);
};

export default CreateModal;
