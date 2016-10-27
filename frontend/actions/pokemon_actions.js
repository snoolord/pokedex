export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const REQUEST_ALL_POKEMON = "REQUEST_ALL_POKEMON";
export const REQUEST_A_POKEMON = "REQUEST_A_POKEMON";
export const RECEIVE_A_POKEMON = "RECEIVE_A_POKEMON";

export const receiveAllPokemon = pokemon => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
});

export const requestAllPokemon = () => ({
  type: REQUEST_ALL_POKEMON
});

export const requestAPokemon = () => ({
  type: REQUEST_A_POKEMON
});

export const receiveAPokemon = (pokemonDetail) => ({
  type: RECEIVE_A_POKEMON,
  pokemonDetail
});
