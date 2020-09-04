import Axios from 'axios';
import {CONFIG} from './Config';

export const GetListPokemon = async () => {
  const link = `${CONFIG.baseLink}${CONFIG.contextApi}/master/pokedex.json`;
  return Axios.get(link);
};
