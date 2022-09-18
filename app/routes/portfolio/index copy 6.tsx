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
        <div>
        <Link to="/">Home</Link>
            <Link to="/portfolio">Logo</Link>
            <Link to="/portfolio/about">About Me</Link>
            <Link to="/portfolio/services">Services</Link>
            <Link to="/portfolio/gallery">Gallery</Link>
            <Link to="/portfolio/testimonials">Testimonials</Link>
            <Link to="/portfolio/faq">FAQ</Link>
            <Link to="/portfolio/contact">Contact Me</Link>
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


