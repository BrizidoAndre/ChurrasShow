import React, { useState } from 'react';
import { View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { ButtonText } from '../../packageButton/style';
import { ButtonSelectDate } from './style';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import moment from 'moment';

export const ButtonDate = () => {
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	const [selectedDate, setSelectedDate] = useState(new Date());

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleConfirm = (date) => {
		setSelectedDate(date);
		hideDatePicker();
	};

	return (
		<View>
			<ButtonSelectDate onPress={showDatePicker}>
				<FontAwesome5 name="calendar-alt" size={16} color="black" />
				<ButtonText>
					{moment(selectedDate).format('DD/MM/YYYY')}
				</ButtonText>
			</ButtonSelectDate>
			<DateTimePicker
				isVisible={isDatePickerVisible}
				mode="date"
				onConfirm={handleConfirm}
				onCancel={hideDatePicker}
			/>
		</View>
	);
};
