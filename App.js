import {Ionicons} from '@expo/vector-icons'
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="User"
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "white",
          drawerActiveBackgroundColor: "#f0e1ff",
          drawerActiveBackgroundColor: "#3c0a6b",
          drawerStyle: { backgroundColor: "#ccc" },
        }}
      >
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: "Welcome Screen",
            drawerIcon: ({color, size}) => <Ionicons name="home" color={color} size={size} />
          }}
        />
        <Drawer.Screen name="User" component={UserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
