import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../Screens/Auth/LoginScreen';
import reanimatedHome from '../../Screens/HomeScreen';
import SignUp from '../../Screens/Auth/SignupScreen';

const Stack = createStackNavigator();

const MyStack: React.FC = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="reanimatedHome" component={reanimatedHome} />
         <Stack.Screen name="signUp" component={SignUp} />
       </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;
