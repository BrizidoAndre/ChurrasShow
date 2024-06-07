import React from 'react';
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

export const CommentModal = ({ visible }) => {
	return (
		<Modal visible={visible} transparent={true} animationType="fade">
			<CreateModalX>
				<ContentCreateModal>
					{/* IMportacao do titleModal */}
					<TitleModal>COMENTÁRIO</TitleModal>

					
				</ContentCreateModal>
			</CreateModalX>
		</Modal>
	);
};

export default CommentModal;
