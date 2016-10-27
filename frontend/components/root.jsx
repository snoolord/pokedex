import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { Router, Route, hashHistory } from 'react-router';
import { requestAPokemon, requestAllPokemon } from '../actions/pokemon_actions';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';


const Root = ({ store }) => {
  const requestOnEnter = () => {
    store.dispatch(requestAllPokemon());
  };

  const requestOnSingle = () => {
    store.dispatch(requestAPokemon());
  };
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={PokemonIndexContainer} onEnter={requestOnEnter} />
          <Route path="pokemon/:pokemonId" component={PokemonDetailContainer} onEnter={requestOnSingle} />
      </Router>
    </Provider>
  );
};

export default Root;
