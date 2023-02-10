export const listPokemon = async () => {
  return await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0",
  ).then((res) => res.json());
};

export const getPokemon = async (url: string) => {
  return await fetch(url).then((res) => res.json());
};
