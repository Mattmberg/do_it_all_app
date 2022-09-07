import type {
    LinksFunction,
} from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import stylesUrl from "~/styles/aquarium.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {
    return (
      <div className="container">
        <header>
          <div>
            <Link to="/">Home</Link>
            <Link to="/aquarium">Logo</Link>
            <Link to="/aquarium/visit">Visit Us</Link>
            <Link to="/aquarium/events">Event</Link>
            <Link to="/aquarium/learn">Learn</Link>
            <Link to="/aquarium/conservation">Conservation Efforts</Link>
            <Link to="/aquarium/support">Support</Link>
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
