import React, { useState } from 'react';
import { View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { ButtonText } from '../../packageButton/style'; // Certifique-se que o caminho está correto
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import { ButtonSelectDate } from '../buttonDate/style'; // Certifique-se que o caminho está correto

export const ButtonTime = ({selectedTime, setSelectedTime}) => {
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	

	const showTimePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideTimePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleConfirm = (date) => {
		setSelectedTime(date);
		console.log(date);
		hideTimePicker();
	};

	return (
		<View>
			<ButtonSelectDate onPress={showTimePicker}>
				<Ionicons name="time" size={16} color="black" />
				<ButtonText>{moment(selectedTime).format('HH:mm')}</ButtonText>
			</ButtonSelectDate>
			<DateTimePicker
				isVisible={isDatePickerVisible}
				mode="time"
				onConfirm={handleConfirm}
				onCancel={hideTimePicker}
			/>
		</View>
	);
};
