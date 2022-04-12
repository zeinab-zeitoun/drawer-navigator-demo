import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import WelcomeScreen from './screens/WelcomeScreen'
import UserScreen from './screens/UserScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator(); 

export default function App() {
  return <NavigationContainer>
    <Drawer.Navigator initialRouteName='User'>
      <Drawer.Screen name="Welcome" component={WelcomeScreen}/>
      <Drawer.Screen name="User" component={UserScreen}/>
    </Drawer.Navigator> 
  </NavigationContainer>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
