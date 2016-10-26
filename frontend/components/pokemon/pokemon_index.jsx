import React from 'react';


const PokemonIndex = ({pokemon}) => {
  console.log(pokemon);
  // let pokemons = props.pokemon.map((pokemon, index) => (<li key={index}>{pokemon.name}</li>));
  return (
    <ul>
      {pokemon.map( (pk, idx) => (<li key={idx}>{pk.name}</li>))}
    </ul>
  );
};

export default PokemonIndex;
