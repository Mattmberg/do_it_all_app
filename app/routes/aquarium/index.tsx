import type {
    LinksFunction,
} from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import stylesUrl from "~/styles/aquarium.css";
import { FaCaretDown } from "react-icons/fa";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {
    return (
      <div className="container">
        <header>
          <div className="mainNav">
            <Link to="/">Home</Link>
            <Link to="/aquarium">Logo</Link>
            <Link to="/aquarium/visit">Visit Us</Link>
            <Link to="/aquarium/events">Event</Link>
            <div className="dropdown">
              <button className="dropdownButton">Learn <FaCaretDown /></button>
              <div className="dropdownLinks">
                <Link to="/aquarium/learn">All Animals</Link>
                <Link to="/aquarium/">Penguins</Link>
                <Link to="/aquarium/">Sharks</Link>
                <Link to="/aquarium/">Jellyfish</Link>
                <Link to="/aquarium/">Sea Lions</Link>
                <Link to="/aquarium/">Crabs</Link>
                <Link to="/aquarium/">Turtles</Link>
                <Link to="/aquarium/">Fish</Link>
              </div>
            </div>
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
