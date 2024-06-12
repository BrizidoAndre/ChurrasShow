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
import { ActivityIndicator, AppRegistry, useWindowDimensions } from 'react-native';
import { LogBox } from 'react-native';
import api from '../../service/service';

export const CheckEmail = ({ navigation, route }) => {
	const [code, setCode] = useState('');
	const { width, height } = useWindowDimensions();
	const [loading, setLoading] = useState(false);

	const {email} = route.params;

	async function insertCode(){
		setLoading(true)
		try{
			const res = await api.post(`/RecuperarSenha/ValidarCodigoRecuperacaoSenha?email=${encodeURIComponent(email)}&codigo=${code}`);
			navigation.navigate('RedefinePassword',{
				email:email
			})

		} catch(e){
			console.log(e)
		}

		setLoading(false)
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
			{/* //? espacos */}
			<Spacing marginBottom={'10'} />
			{/* // * importacao do code input */}
			<CodeInput code={code} setCode={setCode} />

			<Spacing marginTop={'15'} />

			<ButtonLogin onPress={() => insertCode()} disabled={loading}>
                { loading ?
                <ActivityIndicator color={'#CAA858'}  /> 
                :
                <TextButton>
                    Continuar
                </TextButton>
                }
                
            </ButtonLogin>

			{/* // *importacao do gamel tec */}
			<MadeBy height={height}>Made by Gamel Tec</MadeBy>
		</ContainerLogo>
	);
};
