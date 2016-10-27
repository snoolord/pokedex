export const fetchAllPokemon = (success) => {
  $.ajax({
    method: 'GET',
    url: 'api/pokemon',
    success
  });
};

export const fetchAPokemon = (success, error, id) => {
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${id}`,
    success,
    error
  });
};
