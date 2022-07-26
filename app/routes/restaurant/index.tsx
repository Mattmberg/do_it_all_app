import type {
    LinksFunction,
} from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/restaurant.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {
    return (
      <div className="container">
        <header>
            <div className="logoLink">
            <Link to="/restaurant">Logo</Link>
            </div>
            <div className="links">
            <Link to="/restaurant">Home</Link>
            <Link to="/restaurant/charter">Charter Rates/Information</Link>
            <Link to="/restaurant/testimonials">Testimonials</Link>
            <Link to="/restaurant/about-fishing">About Us</Link>
            </div>
        </header>
        <div className="content">

        </div>
        <footer>
            <div className="footerLinks">
                <p>Facebook Twitter Instagram Icon Spots - Everything on this page is demo only.</p>
            </div>
        </footer>
      </div>
      );
  };