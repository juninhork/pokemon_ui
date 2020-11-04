import React, {useEffect, useState, useLayoutEffect} from 'react';
import {StatusBar} from 'react-native';
import {
  Container,
  List,
  SafeArea,
  FilterTouchable,
  FilterImage,
} from './Home.style';
import {GetListPokemon} from '../../service/PokemonService';
import {Pokemon} from '../../model/Pokemon';
import PokemonCell from '../../component/pokemoncell/PokemonCell';
import IMAGE from '../../assets/image/filter-results-button.png';

function Home({navigation}) {
  const [loading, setLoading] = useState<boolean>(true);
  const [listPokemon, setListPokemon] = useState<Array<Pokemon>>([]);
  var listTypePokemon: String[] = [];

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Home',
      headerRight: renderButton,
    });
  }, [navigation]);

  const renderButton = () => {
    return (
      <FilterTouchable activeOpacity={0.5} onPress={detailTypeList}>
        <FilterImage source={IMAGE} />
      </FilterTouchable>
    );
  };

  useEffect(() => {
    getListPokemon();
  }, []);

  /**
   * Request Service
   */
  const getListPokemon = () => {
    setLoading(true);
    GetListPokemon(onSucess, onError);
  };

  const onError = (_error: any) => {
    setLoading(false);
  };

  const onSucess = (pokemonParam: Pokemon[], typeListPokemon: String[]) => {
    setListPokemon(pokemonParam);
    listTypePokemon = typeListPokemon;
    setLoading(false);
  };

  const detailTypeList = () => {
    navigation.navigate('Filter', {typePokemon: listTypePokemon});
  };

  const showDetails = (pokemonDetail: number) => {
    navigation.navigate('PokemonDetail', {
      pokemonDetail: listPokemon[pokemonDetail - 1],
    });
  };

  const _renderItem = function ({item}) {
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
      <SafeArea>
        <Container>
          <List
            onEndReachedThreshold={0.1}
            data={listPokemon}
            renderItem={_renderItem}
          />
        </Container>
      </SafeArea>
    </>
  );
}

export default Home;
