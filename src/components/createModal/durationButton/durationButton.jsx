import React, { useState } from 'react';
import {
	AddButton,
	ContentDurationButton,
	SubtractButton,
	TextDuration,
	VisualizeDurationButton,
} from './style';

import { Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export const DurationButton = ({ hours }) => {
	const [durationTime, setDurationTime] = useState(0);

	function handleAdd() {
		setDurationTime(durationTime + 1);
	}

	const handleSubtract = () => {
		if (durationTime > 0) {
			setDurationTime(durationTime - 1);
		}
	};

	return (
		<ContentDurationButton>
			<SubtractButton onPress={() => handleSubtract()}>
				<AntDesign name="minus" size={24} color="black" />
			</SubtractButton>
			<VisualizeDurationButton>
				<TextDuration>
					{durationTime}
					{hours}
				</TextDuration>
			</VisualizeDurationButton>
			<AddButton onPress={() => handleAdd()}>
				<AntDesign name="plus" size={24} color="black" />
			</AddButton>
		</ContentDurationButton>
	);
};