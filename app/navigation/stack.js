import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screen/auth/Login';
import Signup from '../screen/auth/Signup';
import Splash from '../screen/auth/Splash';
import Home from '../screen/Home';
// import Home2 from '../screen/Home2';
const Stack = createStackNavigator();
const Stack1 = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
export default Stack1;