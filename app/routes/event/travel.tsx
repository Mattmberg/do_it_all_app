import type {
    LinksFunction,
} from "@remix-run/cloudflare";
import { Link, Form } from "@remix-run/react";
import stylesUrl from "~/styles/onlinestore.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {
    return (
      <div className="container">
        <header>
        <Link to="/">Home</Link>
            <Link to="/demos">My Website Demos</Link>
            <Link to="/event">Home</Link>
            <Link to="/event/registration">Registration</Link>
            <Link to="/event/streams">Streams</Link>
            <Link to="/event/features">Features</Link>
            <Link to="/event/guests">Special Guests</Link>
            <Link to="/event/expohall">Exposition Hall</Link>
            <Link to="/event/schedule">Schedule</Link>
            <Link to="/event/travel">Hotel & Travel</Link>
            <Link to="/event/info">Show Information</Link>
            <Link to="/event/health">Health & Safety</Link>
            <Link to="/event/merchandise">Merchandise</Link>
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
