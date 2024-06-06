import React, { useState } from 'react';

import { ContainerBackground } from '../../components/container/style';
import ContainerLogo from '../../components/container/container';
import {
	LatoBoldItalic15,
	LatoRegular25,
	Title,
} from '../../components/texts/style';
import { ButtonLogin, TextButton } from '../../components/button/style';
import { CodeInput } from '../../components/codeInput/codeInput';

export const CheckEmail = () => {
	const [code, setCode] = useState('');
	return (
		<ContainerLogo>
			<Title>Verifique seu email</Title>

			<LatoRegular25>
				Digite o código enviado para o seu email
			</LatoRegular25>

			<CodeInput code={code} setCode={setCode} />

			<ButtonLogin>
				<TextButton>Continuar</TextButton>
			</ButtonLogin>
		</ContainerLogo>
	);
};
