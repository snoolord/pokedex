import React from 'react';


const PokemonIndex = ({pokemon}) => {
  return (
    <ul>
      {pokemon.map( (pk, idx) => (<li key={idx}>{pk.name}</li>))}
    </ul>
  );
};

export default PokemonIndex;
