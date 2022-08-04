import type {
    LinksFunction,
} from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/newsletter.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {
    return (
      <div className="container">
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
            </div>
        </header>
        <div className="content">    
            <form>
                <div className="formContainer">
                    <h2>Subscribe to our Newsletter!</h2>
                </div>

                <div className="formContainer">
                    <input type="text" placeholder="Name" name="name" required/>
                    <input type="text" placeholder="Emai Address" name="mail" required/>
                </div>
                <label>
                    <input type="checkbox" name="subscribe"/>Monthly Newsletter
                </label>

                <div className="formContainer">
                    <input type="submit" value="Subscribe"/>
                </div>
            </form>
        </div>
        <footer>
            <div className="footerLinks">
                <p>Facebook Twitter Instagram Icon Spots - Everything on this page is demo only.</p>
            </div>
        </footer>
      </div>
      );
  };