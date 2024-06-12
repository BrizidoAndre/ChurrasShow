import React, { useEffect, useState } from 'react';
import { Modal, Text } from 'react-native';
import {
	ContainerComment,
	ContainerPackageButton,
	ContentCreateModal,
	CreateModalX,
	LatoComment,
	TitleModal,
} from './style';
import starFull from '../../assets/star.png'
import starEmpty from '../../assets/starEmpty.png'
import { ImageStar } from '../commentCard/styles';

import { LatoRegular15 } from '../texts/style';
import { ContainerRowStar } from '../container/style';
import { ButtonModal } from '../button/style';
import { ButtonText } from '../packageButton/style';
import { Back } from '../back/back';

const CommentStars = ({ star }) => {

    const [score, setScore] = useState([])

    
    function reloadStar(){
        let arrayStar = []
        let points = star;
        for (let index = 0; index < 5; index++) {
            if(points > 0){
                arrayStar.push(<ImageStar source={starFull} />)
            }
            else{
                arrayStar.push(<ImageStar source={starEmpty} />)
            }
            points --;
        }

        return arrayStar
    }

    useEffect(()=>{
        setScore(reloadStar())
    },[])

    return (
        <ContainerRowStar>
            {score}
        </ContainerRowStar>
    )
}


// * criacao do componente de modal de cadastro de orcamento *

export const CommentModal = ({ visible,stars }) => {
	return (
		<Modal visible={visible} transparent={true} animationType="fade">
			<CreateModalX>
				<ContentCreateModal>
					{/* IMportacao do titleModal */}
					<TitleModal>COMENTÁRIO</TitleModal>
					<ContainerComment>
						<LatoComment>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						</LatoComment>
					</ContainerComment>

					<CommentStars star={stars}/>

					{/* <ButtonModal>
						<ButtonText>Confirmar</ButtonText>
					</ButtonModal>
					<Back onPress={onClose} />	 */}				
					
				</ContentCreateModal>
			</CreateModalX>
		</Modal>
	);
};

export default CommentModal;
