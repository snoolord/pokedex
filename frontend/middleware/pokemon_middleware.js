import { fetchAllPokemon } from '../util/api_util';
import { REQUEST_ALL_POKEMON, receiveAllPokemon } from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      const fetchAllSuccess = pokemon => dispatch(receiveAllPokemon(pokemon));
      fetchAllPokemon(fetchAllSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
