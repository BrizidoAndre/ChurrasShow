import styled from 'styled-components';
import { LatoRegular15, LatoRegular25 } from '../texts/style';
import { ContentCreateModal } from '../createModal/style';
import { ButtonModal } from '../button/style';

export const ContentBudgetModal = styled(ContentCreateModal)`
	height: 585px;
`;

export const ContentSummary = styled.View`
	width: 90%;
	height: 352px;
	background-color: #f2e6d0;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 20px;
`;

export const TitleSummary = styled(LatoRegular15)`
	color: #000;
	text-transform: uppercase;
	margin-top: 30px;
	font-weight: bold;
`;

export const ContentSummaryData = styled.View`
	width: 90%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 5px;
	margin-top: 20px;
`;

export const SubDescriptionData = styled(LatoRegular15)`
	color: #000;
	font-size: 13px;
	font-weight: 700;
`;

export const ContentSummaryDescriptions = styled(ContentSummaryData)`
	gap: 10px;
`;

export const DescriptionsPlusSummary = styled(LatoRegular15)`
	font-size: 12px;
	color: #000;
`;

export const ContentButton = styled.View`
	width: auto;
	height: auto;
	display: flex;
	flex-direction: column;
	gap: 15px;
	margin-top: 35px;
`;

export const ButtonBudgetModal = styled.TouchableOpacity`
	width: 155px;
	height: 28px;
	border: 1px solid #3c2e1e;
	border-radius: 20px;
	background-color: #f2e6d0;
	align-items: center;
	justify-content: center;
`;

export const TextButtonModal = styled(LatoRegular25)`
	font-size: 20px;
	color: #3c2e1e;
`;
