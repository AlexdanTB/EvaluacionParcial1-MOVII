import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { StackNavigator } from './src/navigations/StackNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <Provider>
        <StackNavigator/>
      </Provider>
    </NavigationContainer>

  )
}
export default App;
