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
import api from '../../service/service';

export const CheckEmail = ({ navigation, route }) => {
	const [code, setCode] = useState('');

	const { height, width } = useWindowDimensions();

	const { email } = route.params;

	async function checkCode() {
		try {
			const res = await api.post(
				`/RecuperarSenha/ValidarCodigoRecuperacaoSenha?email=${encodeURIComponent(
					email,
				)}&codigo=${code}`,
			);

			navigation.navigate('RedefinePassword', {
				email: email,
			});

			navigation.navigate('RedefinePassword', {
				email: email,
			});
		} catch (error) {
			console.log(error);
		}
	}

	return (
		// *importacao do logo
		<ContainerLogo>
			{/* //* importacao do titulo */}
			<Title>Verifique seu email</Title>
			{/* //* importacao do texto principal */}
			<LatoRegular25>
				Digite o código enviado para o seu email
			</LatoRegular25>

			<Spacing marginTop={'10'} />

			<CodeInput code={code} setCode={setCode} />

			<Spacing marginTop={'20'} />

			<ButtonLogin
				onPress={() => {
					checkCode();
				}}
			>
				<TextButton>Continuar</TextButton>
			</ButtonLogin>
			<MadeBy height={height}>Made by Gamel Tec</MadeBy>
		</ContainerLogo>
	);
};
