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
        <main>
              <h1>Contact Us</h1>

              <p>If you have any comments, concerns, or suggestions- feel free to email us here or call our help line at xxx-xxx-xxxx</p>

              <form>
                <input type="text" name="from_name" placeholder="Your Name" required/>
                <input type="hidden" name="to_name" placeholder="To Me"/>
                <textarea name="message" placeholder="Your Message" style={{height:"200px"}} required/>
                <input type="text" name="reply_to" placeholder="Your Email" required/>
                <button type="submit" disabled>Submit</button>
              </form>
            </main>
        <footer>
            <div className="footerLinks">
                <p>Facebook Twitter Instagram Icon Spots - Everything on this page is demo only.</p>
            </div>
        </footer>
      </div>
      );
  };