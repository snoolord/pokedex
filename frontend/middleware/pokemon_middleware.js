import { fetchAllPokemon, fetchAPokemon } from '../util/api_util';
import { REQUEST_ALL_POKEMON, receiveAllPokemon, REQUEST_A_POKEMON, receiveAPokemon}
    from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      const fetchAllSuccess = pokemon => dispatch(receiveAllPokemon(pokemon));
      fetchAllPokemon(fetchAllSuccess);
      return next(action);
    case REQUEST_A_POKEMON:
      const fetchASuccess = pokemonDetail => dispatch(receiveAPokemon(pokemonDetail));
      const fetchAError = e => alert(e);
      fetchAPokemon(fetchASuccess, fetchAError, action.id);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
