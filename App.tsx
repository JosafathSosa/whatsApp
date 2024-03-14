import { View } from 'react-native';
import LoadingPage from './components/pages/LoadingPage/LoadingPage';
import WelcomePage from './components/pages/WelcomePage/WelcomePage';


export default function App() {
  return (
    <View >
      <View>
        <WelcomePage />
      </View>
    </View>
  );
}

