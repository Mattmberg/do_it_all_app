import type {
    LinksFunction,
} from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/fishing.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {
    return (
      <div className="container" style={ { backgroundImage: "url('./assets/fish_background.jpg')" } }>
        <header>
            <div className="logoLink">
            <Link to="/fishing">Logo</Link>
            </div>
            <div className="links">
            <Link to="/fishing">Home</Link>
            <Link to="/fishing/charter">Charter Rates/Information</Link>
            <Link to="/fishing/testimonials">Testimonials</Link>
            <Link to="/fishing/about-fishing">About Us</Link>
            <Link to="/fishing/newsletter">Newsletter</Link>
            <Link to="/fishing/contact">Contact Us</Link>
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