import { LinksFunction, LoaderFunction, json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { Link } from "@remix-run/react";
import { ItemCards } from "~/types";
import { useState } from "react";
import { FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";

import stylesUrl from "~/styles/onlinestore.css";

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
  const [itemQuantity, setItemQuantity] = useState(1);


  const { pokemon } = useLoaderData() as LoaderData;
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
      <div className="itemCard">
        <div className="cardtitle">
        <h1 className="my-6 border-b-2 text-center text-3xl">
          {item.name} { item.rating }
        </h1>
        </div>
        <div className="cardimage">
        <img className='mx-auto' src={item.image} />
        </div>
        <div className="cardstats">
        <h3>{ item.price }</h3> <br />
        
        <button onClick={() => {
          setItemQuantity(Math.max(itemCount - 1, 0));
        }}><FaMinus />{ " " }</button>
        
        <button onClick={() => {
          setItemQuantity(Math.max(itemCount +1));
        }}><FaPlus />{ " " }</button>
        
        <h3>Details</h3> <br />
        { item.description } <br />
        { item.department } <br />
        { item.subDepartment } <br />
        { item.brand } <br />
        { item.ageRange } <br />
        { item.material } <br />
        { item.yearOfRelease } <br />
        { item.sale }
        </div>
      </div>
      <footer>
          <div>
            <p>&copy; Me</p>
          </div>
      </footer>
    </main>
  );
}
