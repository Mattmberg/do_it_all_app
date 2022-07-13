import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPokemon } from "~/models/pokemon.server";
import { LinksFunction } from "@remix-run/node";
import { Pokemon } from "pokenode-ts";

import stylesUrl from "~/styles/pokemon.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl, }];
};

type LoaderData = {
  pokemon: Pokemon;
};

export const loader: LoaderFunction = async ({params,}) => {
  return ({
    pokemon: getPokemon(params.name),
  });
};

export default function PokemonSlug() {
  const { pokemon } = useLoaderData() as LoaderData;
  return (
    <main>
      <h1>
        You caught: {pokemon.name}
      </h1>
      <img>{pokemon.sprites.front_default}</img>
    </main>
  );
}