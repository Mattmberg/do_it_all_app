import type {
    LinksFunction,
} from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/onlinestore.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {
    return (
      <div className="container">
        <header>
            <div className="logoLink">
            <Link to="/onlinestore">Logo</Link>
            </div>
            <div className="links">
            <Link to="/onlinestore">Home</Link>
            <Link to="/onlinestore/charter">Charter Rates/Information</Link>
            <Link to="/onlinestore/testimonials">Testimonials</Link>
            <Link to="/onlinestore/about-fishing">About Us</Link>
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