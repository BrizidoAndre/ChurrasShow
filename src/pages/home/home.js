import { Button, View } from "react-native"


const Home = ({navigation}) => {

    return(
        <View style={{margin:150}}>

            <Button title="ir para a navegação" onPress={()=>{navigation.navigate('Main')}}/>
        </View>
    )
}

export default Home

