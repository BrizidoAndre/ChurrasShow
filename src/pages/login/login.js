import { ActivityIndicator, Alert, Text } from 'react-native';
import ContainerLogo from '../../components/container/container';
import { ButtonLogin, TextButton } from '../../components/button/style';
import {
	LatoBoldUnderline,
	LatoItalic14,
	MadeBy,
	Title,
} from '../../components/texts/style';
import Input from '../../components/input/input';
import { ContainerForm } from '../../components/container/style';
import Spacing from '../../components/spacing/spacing';

import { useWindowDimensions } from 'react-native';
import { useState } from 'react';
import api from '../../service/service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userDecodeToken } from '../../utils/auth';

const Login = ({ navigation }) => {
	const { width, height } = useWindowDimensions();

	const [loading, setLoading] = useState(false);

    const [userLogin, setUserLogin] = useState({
        email: 'abrizidobasilio@gmail.com',
        senha: 'Jaca'
    })


	async function signIn() {
		try {
			setLoading(true);

			const res = await api.post('/Login', userLogin);
			const data = await res.data;

			if (res.status === 200) {
				AsyncStorage.setItem('token', data.token);
				navigation.navigate('Main');
			}
		} catch (error) {
			Alert.alert(
				'Informações inválidas',
				'Verifique o email e a senha digitadas',
			);
			setUserLogin({
				...userLogin,
				senha: '',
			});
		}
		setLoading(false);
	}

	return (
		<ContainerLogo>
			<Title>Login</Title>

			<ContainerForm>
				<Input
					placeholder={'Email ou Username...'}
					setValue={(txt) =>
						setUserLogin({
							...userLogin,
							email: txt,
						})
					}
					value={userLogin.email}
				/>
				<Input
					placeholder={'Senha'}
					setValue={(txt) =>
						setUserLogin({
							...userLogin,
							senha: txt,
						})
					}
					value={userLogin.senha}
					secure={true}
				/>

				<LatoBoldUnderline
					onPress={() => navigation.navigate('RecoverPassword')}
				>
					Esqueceu a senha?
				</LatoBoldUnderline>
			</ContainerForm>

			<Spacing marginTop={'20'} />

			<ButtonLogin onPress={() => signIn()} disabled={loading}>
				{loading ? (
					<ActivityIndicator color={'#CAA858'} />
				) : (
					<TextButton>Login</TextButton>
				)}
			</ButtonLogin>

			<Spacing marginTop={20} />
			<LatoItalic14>
				Não possui conta?{' '}
				<LatoBoldUnderline
					onPress={() => navigation.navigate('CreateAccount')}
				>
					Crie Uma agora
				</LatoBoldUnderline>
			</LatoItalic14>

			<MadeBy height={height}>Made by Gamel Tec</MadeBy>
		</ContainerLogo>
	);
};

export default Login;
