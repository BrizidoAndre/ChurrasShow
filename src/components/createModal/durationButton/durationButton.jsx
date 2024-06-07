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
				{/* <AntDesign name="minus" size={14} color="black" /> */}
			</SubtractButton>
			<VisualizeDurationButton>
				<TextDuration>0h</TextDuration>
			</VisualizeDurationButton>
			<AddButton></AddButton>
		</ContentDurationButton>
	);
};
