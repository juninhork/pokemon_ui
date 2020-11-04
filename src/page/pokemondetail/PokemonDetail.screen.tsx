import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Container} from './PokemonDetail.style';

import PokemonCell from '../../component/pokemoncell/PokemonCell';

const PokemonDetail = ({route, navigation}) => {
  const {pokemonDetail} = route.params;

  useEffect(() => {}, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{backgroundColor: '#000000'}}>
        <Container>
          <PokemonCell
            id={pokemonDetail.id}
            name={pokemonDetail.name}
            sourceImage={pokemonDetail.img}
            // onPress={showDetails}
          />
        </Container>
      </SafeAreaView>
    </>
  );
};

export default PokemonDetail;
