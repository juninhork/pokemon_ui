/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../page/home/Home.screen';
import ListPokemon from '../page/listpokemon/ListPokemon.screen';
import Filter from '../page/filter/Filter.screen';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#000000',
            },
          }}
          name="Home"
          component={Home}
        />

        <Stack.Screen
          options={{
            title: 'Lista',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#000000',
            },
          }}
          name="ListPokemon"
          component={ListPokemon}
        />

        <Stack.Screen
          options={{
            title: 'Filter',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#000000',
            },
          }}
          name="Filter"
          component={Filter}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
