import React from 'react';
import { Modal } from 'react-native';
import { ContentCreateModal, CreateModalX } from './style';

export const CreateModal = ({ visible }) => {
	return (
		<Modal visible={visible} transparent={true} animationType="fade">
			<CreateModalX>
				<ContentCreateModal></ContentCreateModal>
			</CreateModalX>
		</Modal>
	);
};

export default CreateModal;
