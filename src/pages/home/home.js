import { Button, View } from "react-native"
import { ButtonLogin, TextButton } from "../../components/button/style"


const Home = ({navigation}) => {

    return(
        <View style={{margin:150}}>

            <Button title="ir para a navegação" onPress={()=>{navigation.navigate('Main')}}/>
           
            <TextButton>Orçamento</TextButton>
          
        </View>
    )
}

export default Home

