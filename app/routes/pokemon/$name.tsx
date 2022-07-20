import { LinksFunction, LoaderFunction, json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { getPokemon } from "~/models/pokemon.server";
import { Pokemon } from "pokenode-ts";

import stylesUrl from "~/styles/pokemon.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl, }];
};

type LoaderData = {
  pokemon: Awaited<ReturnType<typeof getPokemon>>;
};

export const loader: LoaderFunction = async ({params,}) => {
  return json<LoaderData>({
    pokemon: await getPokemon(params.name),
  });
};

export default function PostSlug() {
  const { pokemon } = useLoaderData() as LoaderData;
  return (
    <main className="mx-auto max-w-4xl">
      <div className="pokemonCard">
        <div className="cardtitle">
        <h1 className="my-6 border-b-2 text-center text-3xl">
          You caught: {pokemon.name}
        </h1>
        </div>
        <div className="cardimage">
        <img className='mx-auto' src={pokemon.sprites.front_default} />
        </div>
        <div className="cardstats">
        <ul className='mx-auto text-center'>
            {pokemon.types.map((types) => (
              <li key={types.slot}>
                {types.type.name}
              </li>
            ))}
        </ul>
        </div>
      </div>
    </main>
  );
}