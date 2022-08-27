import type {
    LinksFunction,
} from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import { FaShoppingCart } from "react-icons/fa";
import { myItems } from "~/components/data";
import { ItemCard } from "~/components/itemcard";

import stylesUrl from "~/styles/onlinestore.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {
    return (
      <div className="container">
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
        <div className="content">
            <div className="cardcomponentgrid">
                {myItems.map(items => {
                    return <ItemCard key={items.id} {...items} />;    
                })}
            </div>
        </div>
        <footer>
            <div className="footerLinks">
                <p>Facebook Twitter Instagram Icon Spots - Everything on this page is demo only.</p>
            </div>
        </footer>
      </div>
      );
  };
