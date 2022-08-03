import type {
    LinksFunction,
} from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/onlinestore.css";
import { myItems } from "~/components/data";
import { ItemCard } from "~/components/itemcard";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {
    return (
      <div className="container">
        <header>
            <div className="mainNav">
            <Link to="/onlinestore">Logo</Link>
            <input type="text" placeholder="Search..." />
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
            </div>
        </header>
        <div className="content">
        <div className="cardcomponentgrid">
                {myItems.filter(item => item.department === "Tech").map(filteredItems => {
                    return <ItemCard key={filteredItems.id} {...filteredItems} />;    
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