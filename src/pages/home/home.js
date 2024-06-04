import { Button, View } from "react-native"
import { ButtonLogin, TextButton } from "../../components/button/style"


const Home = ({navigation}) => {

    return(
        <View style={{margin:150}}>

            <Button title="ir para a navegação" onPress={()=>{navigation.navigate('Main')}}/>

            <Button title="ir para a login" onPress={()=>{navigation.navigate('login')}}/>
                      
          
        </View>
    )
}

export default Home

