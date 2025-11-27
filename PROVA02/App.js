import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import UserCommitmentsScreen from './screens/UserCommitmentsScreen';
import TeamCommitmentsScreen from './screens/TeamCommitmentsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Agenda do dia',
          }}
        />
        <Stack.Screen 
          name="UserCommitments" 
          component={UserCommitmentsScreen} 
          options={{ 
            title: 'Meus compromissos',
          }}
        />
        <Stack.Screen 
          name="TeamCommitments" 
          component={TeamCommitmentsScreen} 
          options={{ 
            title: 'Compromissos da equipe',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
