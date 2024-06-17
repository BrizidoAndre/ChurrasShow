import React from 'react';
import { Description, ViewDescriptionX } from './style';


export const ViewDescription = ({ text }) => {
	return (
		<ViewDescriptionX>
			<Description>{text}</Description>
		</ViewDescriptionX>
	);
};
