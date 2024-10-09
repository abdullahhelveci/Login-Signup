import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
    initialRouteName='Login'
    screenOptions={{
        headerShown:false
    }}
    >
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
  )
}

export default Router