import React from 'react';
import {
	AddButton,
	ContentDurationButton,
	SubtractButton,
	TextDuration,
	VisualizeDurationButton,
} from './style';
import AntDesign from '@expo/vector-icons/AntDesign';

export const DurationButton = () => {
	return (
		<ContentDurationButton>
			<SubtractButton>
				<AntDesign name="minus" size={20} color="black" />
			</SubtractButton>
			<VisualizeDurationButton>
				<TextDuration>0h</TextDuration>
			</VisualizeDurationButton>
			<AddButton>
				<AntDesign name="plus" size={20} color="black" />
			</AddButton>
		</ContentDurationButton>
	);
};
