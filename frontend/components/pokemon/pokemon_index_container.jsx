import { connect } from 'react-redux';
import selectAllPokemon from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';

const mapStateToProps = (state) => {
  return {pokemon: selectAllPokemon(state)};
};

export default connect(
  mapStateToProps
)(PokemonIndex);
