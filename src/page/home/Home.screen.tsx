import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, FlatList, StatusBar} from 'react-native';
import {styles} from './Home.style';

import {GetListPokemon} from '../../service/PokemonService';
import PokemonCell from '../../component/pokemoncell/PokemonCell';
import {PokemonList} from '../../model/PokemonList';
import {Pokemon} from '../../model/Pokemon';

const Home: React.FC<Props> = ({navigation}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [listPokemon, setListPokemon] = useState<Array<Pokemon>>([]);

  useEffect(() => {
    getListPokemon();
  }, []);

  /**
   * Request Service
   */
  const getListPokemon = () => {
    setLoading(true);
    GetListPokemon()
      .then((response) => response.data)
      .then((response: PokemonList) => {
        setListPokemon(response.pokemon);
        setLoading(false);
      })
      .catch((error) => {
        console.warn(error);
        setLoading(false);
      });
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
        <View>
          <FlatList
            style={styles.list}
            onEndReachedThreshold={0.1}
            data={listPokemon}
            keyExtractor={_keyExtractor}
            renderItem={_renderItem}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
