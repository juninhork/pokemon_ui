import React, {useEffect, useState, useLayoutEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {
  Container,
  List,
  FilterTouchable,
  FilterImage,
} from './ListPokemon.style';

import {GetListPokemon} from '../../service/PokemonService';
import PokemonCell from '../../component/pokemoncell/PokemonCell';
import {Pokemon} from '../../model/Pokemon';
import IMAGE from '../../assets/image/filter-results-button.png';

const ListPokemon: React.FC<Props> = ({route, navigation}) => {
  const {typeName} = route.params;
  const [loading, setLoading] = useState<boolean>(true);
  const [listPokemon, setListPokemon] = useState<Array<Pokemon>>([]);

  useEffect(() => {
    getListPokemon();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      // title: 'List Pokemon',
      title: 'Filter',
      headerRight: renderButton,
    });
  }, [navigation]);

  const renderButton = () => {
    return (
      <FilterTouchable activeOpacity={0.5} onPress={() => {}}>
        <FilterImage source={IMAGE} />
      </FilterTouchable>
    );
  };

  /**
   * Request Service
   */
  const getListPokemon = () => {
    setLoading(true);
    GetListPokemon(onSucess, onError);
  };
  const onError = (error) => {
    setLoading(false);
  };

  const onSucess = (pokemonParam: Pokemon[], typeLisPokemon: String[]) => {
    setListPokemon(pokemonParam);
    setLoading(false);
  };

  const showDetails = (_id: number) => {
    //   navigation.navigate('DetailCharacter', {id: _id});
  };

  const _keyExtractor = (item: number, index: number) => `${index}`;

  const _renderItem = ({item}) => {
    console.warn('item', item);
    return (
      <PokemonCell
        id={item.id}
        name={item.name}
        sourceImage={item.img}
        onPress={showDetails}
      />
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{backgroundColor: '#000000'}}>
        <Container>
          <List
            onEndReachedThreshold={0.1}
            data={listPokemon}
            keyExtractor={_keyExtractor}
            renderItem={_renderItem}
          />
        </Container>
      </SafeAreaView>
    </>
  );
};

export default ListPokemon;
