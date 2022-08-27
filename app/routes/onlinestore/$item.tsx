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
            <div className="mainNav">
                    <Link to="/onlinestore">Logo</Link>  
                    <Link to="/onlinestore/checkout" style={{float:"right"}}>Checkout</Link>
                    <Link to="/onlinestore/contact" style={{float:"right"}}>Contact Us</Link> 
                <div className="searchContainer">
                    <input type="text" placeholder="Search..." name="search" />
                    <button type="submit">Submit</button>
                </div>
            </div>
            <div className="categoryNav">
                    <Link to="/onlinestore">Home</Link>
                    <Link to="/onlinestore/deals">Deals</Link>
                    <Link to="/onlinestore/tech">Tech</Link>
                    <Link to="/onlinestore/health">Health</Link>
                    <Link to="/onlinestore/household">Household Goods</Link>
                    <Link to="/onlinestore/furniture">Furniture</Link>
                    <Link to="/onlinestore/clothes">Clothes</Link>
                    <Link to="/onlinestore/outdoors">Outdoors</Link>
                    <Link to="/onlinestore/pets">Pets</Link>
                    <Link to="/onlinestore/food">Food</Link>
                    <Link to="/onlinestore/cart" style={{float:"right"}}><FaShoppingCart /></Link>
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
