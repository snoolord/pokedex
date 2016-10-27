import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

const PokemonIndex = ({pokemon}) => {
  return (
    <ul>
      {pokemon.map( (pk, idx) => (<PokemonIndexItem key={pk.id} pokemon={pk}/>))}
    </ul>
  );
};

export default PokemonIndex;
