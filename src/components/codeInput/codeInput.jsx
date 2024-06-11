import React from 'react';
import { Cell, CellWrapper } from './style';
import {
	CodeField,
	Cursor,
	useBlurOnFulfill,
	useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { StyleSheet } from 'react-native';

const CELL_COUNT = 4;

export const CodeInput = ({ code, setCode }) => {
	const ref = useBlurOnFulfill({ code, cellCount: CELL_COUNT });
	const [props, getCellOnLayoutHandler] = useClearByFocusCell({
		code,
		setCode,
	});

	return (
		<CellWrapper>
			<CodeField
				ref={ref}
				{...props}
				// Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
				value={code}
				autoFocus={true}
				onChangeText={setCode}
				cellCount={CELL_COUNT}
				rootStyle={codeFieldStyle}
				keyboardType="number-pad"
				textContentType="oneTimeCode"
				renderCell={({ index, symbol, isFocused }) => (
					<Cell key={index} onLayout={getCellOnLayoutHandler(index)}>
						{symbol || (isFocused ? <Cursor /> : null)}
					</Cell>
				)}
			/>
		</CellWrapper>
	);
};

const codeFieldStyle = StyleSheet.create({
	gap: 20,
});
