import { Link, useLoaderData } from "@remix-run/react";
import { getPokemons } from "~/models/pokemon.server";
import { LinksFunction, json } from "@remix-run/cloudflare";
import stylesUrl from "~/styles/pokemon.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl, }];
};

type LoaderData = {
  data: Awaited<ReturnType<typeof getPokemons>>;
};

export const loader = async () => {
  return json<LoaderData>({
    data: await getPokemons(),
  });
};

export default function Index() {
    const { data } = useLoaderData() as LoaderData;
    return (
      <main className="mx-auto max-w-4xl">
              <header>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/matthew-bergeron-jr-cs/">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/Mattmberg">GitHub</a>
              </li>
              <li>
                <Link to="/pokemon">Catch a Pokemon</Link>
              </li>
              <li>
                <Link to="/fishing">Charter Business Demo</Link>
              </li>
              <li>
                <Link to="/onlinestore">Online Store Demo</Link>
              </li>
              <li>
                <Link to="/restaurant">Restaurant Demo</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
        <h1 className="my-6 border-b-2 text-center text-3xl">
          Which Pokémon do you want to catch?</h1>
        <ul className='mx-auto text-center'>
          {data.map((pokemon) => (
            <li key={pokemon.name}>
              <Link
                to={pokemon.name}
                className="text-blue-600 underline"
              >
                {pokemon.name}
              </Link>
            </li>
          ))}
        </ul>
        <footer>
          <div>
            <p>&copy; Me</p>
          </div>
      </footer>
      </main>
    );
}