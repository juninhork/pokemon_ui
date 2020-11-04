import Axios from 'axios';
import {CONFIG} from './Config';
import {PokemonList} from '../model/PokemonList';
import {Pokemon} from '../model/Pokemon';
import listPokemon from '../model/mock/PokemonMock.json';

// export const GetListPokemon = async (onSucess: Function, onError: Function) => {
//   const link = `${CONFIG.baseLink}${CONFIG.contextApi}/master/pokedex.json`;
//   Axios.get(link)
//     .then((response) => response.data)
//     .then((response: PokemonList) => {
//       if (response != null) {
//         var pokemonTypeList: String[] = [];
//         response.pokemon.forEach(function (valuePokemon: Pokemon) {
//           valuePokemon.type.forEach(function (value: String) {
//             if (!pokemonTypeList.includes(value)) {
//               pokemonTypeList.push(value);
//             }
//           });
//         });

//         onSucess(response.pokemon, pokemonTypeList);
//       }
//     })
//     .catch((error) => {
//       console.warn(error);
//       onError(error);
//     });
// };

export const GetListPokemon = async (onSucess: Function, onError: Function) => {
  let response = listPokemon;
  console.warn(response);
  if (response != null) {
    var pokemonTypeList: String[] = [];
    response.pokemon.forEach(function (valuePokemon: Pokemon) {
      valuePokemon.type.forEach(function (value: String) {
        if (!pokemonTypeList.includes(value)) {
          pokemonTypeList.push(value);
        }
      });
    });

    onSucess(response.pokemon, pokemonTypeList);
  }
};
