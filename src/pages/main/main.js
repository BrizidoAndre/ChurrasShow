import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../home/home';
import Login from '../login/login';
import { ContentIcon } from './style';

import {FontAwesome, Entypo} from '@expo/vector-icons' 
import CreateAccount from '../createAccount/createAccount';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator screenOptions={({route})=> ({
        tabBarStyle:{backgroundColor:'#F8EFDF',height:'7%', paddingTop:5},
        tabBarActiveBackgroundColor:'transparent',
        headerShown:false,
        tabBarShowLabel:false,



        tabBarIcon: ({ focused }) => {
            if (route.name === 'Home') {

                return (
                    <ContentIcon
                    >
                        <Entypo name="home" style={{marginRight:50}} size={30}  color={ focused ? '#1D1D1D' : '#1D1D1D1D'} />

                    </ContentIcon>
                )

            } else {
                return (

                    <ContentIcon
                    >
                        <FontAwesome name="user-circle" style={{marginLeft:50}} size={30} color={focused ? '#1D1D1D' : '#1D1D1D1D'} />

                    </ContentIcon>
                )
            }
        }
        })}>

      <Tab.Screen name="Home" component={Home} />

      <Tab.Screen name="Login" component={Login} />

      <Tab.Screen name="CreateAccount" component={CreateAccount} />

    </Tab.Navigator>
  );
}



export default Main