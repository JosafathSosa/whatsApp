import { View } from 'react-native';
import LoadingPage from './components/pages/LoadingPage/LoadingPage';
import WelcomePage from './components/pages/WelcomePage/WelcomePage';
import WelcomePage1 from './components/pages/WelcomePage1/WelcomePage1';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { LoginPage } from './components/pages/LoginScreen/LoginPage';
import { CountryPage } from './components/pages/LoginScreen/CountryPage';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='wallet_page'>
        <Stack.Screen name="loading_page" component={LoadingPage}/>
        <Stack.Screen name='wallet_page' component={WelcomePage} />
        <Stack.Screen name="welcome_page" component={WelcomePage1} options={{headerShown: false}}/>
        <Stack.Screen name='login_page' component={LoginPage
        } options={{headerShown: false}}/>
        <Stack.Screen name='country_page' component={CountryPage} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

