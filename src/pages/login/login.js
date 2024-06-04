import { Text } from 'react-native';
import Input from '../../components/input/input';
import Titles from '../../components/title/title';

const Login = () => {
	return (
		<>
			<Titles title={'LOGIN'} />
			<Input label="Alo prefeito" />
		</>
	);
};

export default Login;
