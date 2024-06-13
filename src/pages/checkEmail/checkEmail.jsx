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

export const CheckEmail = ({ navigation, route }) => {
	const [code, setCode] = useState('');
	return (
		// *importacao do logo
		<ContainerLogo>
			{/* //* importacao do titulo */}
			<Title>Verifique seu email</Title>
			{/* //* importacao do texto principal */}
			<LatoRegular25>
				Digite o código enviado para o seu email
			</LatoRegular25>

			<CodeInput code={code} setCode={setCode} />

			<ButtonLogin
				onPress={() => { navigation.navigate('') }}
			>
				<TextButton>Continuar</TextButton>
			</ButtonLogin>
			<MadeBy>Made by Gamel Tec</MadeBy>
		</ContainerLogo>
	);
};
