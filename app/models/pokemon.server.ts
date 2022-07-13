import { PokemonClient } from 'pokenode-ts';

export async function getPokemons() {
  const api = new PokemonClient();

  const { results } = await api
    .listPokemons(100000, 0)

    return results
};

export async function getPokemon(name: string) {
  const api = new PokemonClient();

  const { sprites } = await api
    .getPokemonByName(name)

    return {
      name: name, 
      img: sprites.front_default,
    } 
}