import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPokemon } from "~/models/pokemon.server";
import { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/pokemon.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl, }];
};

type LoaderData = {
  pokemon: Awaited<ReturnType<typeof getPokemon>>;
};

export const loader: LoaderFunction = async ({params,}) => {
  return json({
    pokemon: await getPokemon(params.name),
  });
};

export default function PokemonSlug() {
  const { pokemon } = useLoaderData() as LoaderData;
  return (
    <main>
      <h1>
        You caught: {pokemon.name}
      </h1>
      <img src={pokemon.img} />
    </main>
  );
}