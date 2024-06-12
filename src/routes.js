import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/main';
import Login from './pages/login';
import Cadastro from './pages/cadastro';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
            name="login"
            component={Login}
            options={{
              title: 'LOGIN',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#1C1C1C',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color: '#00FF00',
              },
            }}
        />
        <Stack.Screen
          name="cadastro"
          component={Cadastro}
          options={{
            title: 'Cadastrar Usúario',
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1C1C1C',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#00FF00',
            },
          }}
        />
        <Stack.Screen
          name="main"
          component={Main}
          options={{
            title: 'Livraria',
            headerTitleAlign: 'center',
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#1C1C1C',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#00FF7F',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}