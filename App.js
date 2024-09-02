import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './Home'
import Send from './screens/Send'
import Receive from './screens/Receive'
import Pay from './screens/Pay'
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName=" "
      screenOptions={{
        tabBarActiveTintColor: '#02d43d',
      }}
    >
      <Tab.Screen
        name=" "
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tap to Send Money to Someone"
        component={Send}
        options={{
          tabBarLabel: 'Send',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-arrow-right" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pending - Tap to Accept"
        component={Receive}
        options={{
          tabBarLabel: 'Receive',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-arrow-left" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan a QR Code to Pay"
        component={Pay}
        options={{
          tabBarLabel: 'Pay',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});