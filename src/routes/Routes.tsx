/**
 * @author Paulo Braga de Assis Junior
 * @format
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../page/home/Home.screen';
import Filter from '../page/filter/Filter.screen';
import PokemonDetail from '../page/pokemondetail/PokemonDetail.screen';

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
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#000000',
            },
          }}
          name="Filter"
          component={Filter}
        />
        <Stack.Screen
          options={{
            title: 'PokemonDetail',
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#000000',
            },
          }}
          name="PokemonDetail"
          component={PokemonDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
