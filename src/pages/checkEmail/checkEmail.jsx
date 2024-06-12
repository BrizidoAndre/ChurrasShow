import React, { useEffect, useState } from 'react';

import { ContainerBackground } from '../../components/container/style';
import ContainerLogo from '../../components/container/container';
import {
	LatoBoldItalic15,
	LatoRegular25,
	MadeBy,
	Title,
} from '../../components/texts/style';
import { ButtonLogin, TextButton } from '../../components/button/style';
import { CodeInput } from '../../components/codeInput/codeInput';
import Spacing from '../../components/spacing/spacing';
import { useWindowDimensions } from 'react-native';
import { LogBox } from 'react-native';

export const CheckEmail = ({ navigation }) => {
	const [code, setCode] = useState('');
	const { width, height } = useWindowDimensions();
	return (
		// *importacao do logo
		<ContainerLogo>
			{/* //* importacao do titulo */}
			<Title>Verifique seu email</Title>
			{/* //* importacao do texto principal */}
			<LatoRegular25>
				Digite o código enviado para o seu email
			</LatoRegular25>
			{/* //? espacos */}
			<Spacing marginBottom={90} />
			{/* // * importacao do code input */}
			<CodeInput code={code} setCode={setCode} />

			<ButtonLogin>
				<TextButton>Continuar</TextButton>
			</ButtonLogin>
			{/* // *importacao do gamel tec */}
			<MadeBy height={height}>Made by Gamel Tec</MadeBy>
		</ContainerLogo>
	);
};
