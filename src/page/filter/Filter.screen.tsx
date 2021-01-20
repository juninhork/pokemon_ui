import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {Container, List, SafeArea} from './Filter.style';
import TypePokemonCell from '../../component/typepokemoncell/TypePokemonCell';

const Filter: React.FC<Props> = ({route, navigation}) => {
  const {typePokemon} = route.params;
  const [listTypePokemon, setListTypePokemon] = useState<String[]>([]);
  const [listSelectedTypePokemon, setListSelectedTypePokemon] = useState<
    String[]
  >([]);

  useEffect(() => {
    setListTypePokemon(typePokemon);
    console.warn(route.params);
  }, []);

  const _selectedItem = (item) => {};

  const _renderItem = ({item}) => {
    return <TypePokemonCell name={item} onPress={_selectedItem} />;
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeArea>
        <Container>
          <List
            onEndReachedThreshold={0.1}
            data={typePokemon}
            renderItem={_renderItem}
          />
        </Container>
      </SafeArea>
    </>
  );
};

export default Filter;
