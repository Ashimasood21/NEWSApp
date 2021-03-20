import React from 'react';
import { Text, View } from 'react-native';
import Stack1 from './app/navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const App=()=>{
  return(
    <NavigationContainer>
      <Stack1></Stack1>
    </NavigationContainer>
  )
}
export default App;