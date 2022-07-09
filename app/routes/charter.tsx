import type {
    LinksFunction,
} from "@remix-run/node";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/charter.css";

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
            <Link to="/charter">Charter Rates/Information</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/about-fishing">About Us</Link>
            </div>
        </header>
        <div className="content">
            <h1><u>Charter Rates and Information</u></h1>

            <p>Details about anything related to the charter such as what a typical day looks like and what seasons you run.</p>

            <h3>Trip Specifics</h3>

            <p>Weather Factors</p>

            <p>Catch and release policy</p>

            <p>Food, drink, etc.</p>

            <p>License information if participants need it etc.</p>

            <h2>Charter Rates:</h2>

            <ul>
                <li># Hours - $</li>
                <li># Hours - $</li>
            </ul>

            <p></p>

            <h2>Contact Information:</h2>

            <ul>
                <li>Call us at - </li>
                <li>Email us at - </li>
            </ul>

            <p></p>

            <h2>Terms and Conditions:</h2>

            <ul>
                <li>Terms</li>
                <li>Conditions</li>
            </ul>
        </div>
        <footer>
            <div className="footerLinks">
                <p>Facebook Twitter Instagram Icon Spots - Everything on this page is demo only.</p>
            </div>
        </footer>
      </div>
      );
  };