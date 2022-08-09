import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './app/src/screens/SplashScreen';
import WelcomeScreen from './app/src/screens/WelcomeScreen';
import SignInScreen from './app/src/screens/SignInScreen';
import SignUpScreen from './app/src/screens/SignUpScreen';
import HomeScreen from './app/src/screens/HomeScreen';
import EventAddScreen from './app/src/screens/EventAddScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EventAdd" component={EventAddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}