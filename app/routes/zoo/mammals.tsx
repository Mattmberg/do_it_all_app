import type {
    LinksFunction,
} from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import stylesUrl from "~/styles/zoo.css";
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
            <Link to="/zoo">Logo</Link>
            <Link to="/zoo/visit">Visit</Link>
            <div className="dropdown">
              <button className="dropdownButton">Animals <FaCaretDown /></button>
              <div className="dropdownLinks">
                <Link to="/zoo/animals">All Animals</Link>
                <Link to="/zoo/amphibians">Amphibians</Link>
                <Link to="/zoo/birds">Birds</Link>
                <Link to="/zoo/fish">Fish</Link>
                <Link to="/zoo/reptiles">Reptiles</Link>
                <Link to="/zoo/mammals">Mammals</Link>
                <Link to="/zoo/invertebrates">Invertebrates</Link>
              </div>
            </div>
            <Link to="/zoo/events">Events</Link>
            <Link to="/zoo/volunteer">Volunteer</Link>
            <Link to="/zoo/support">Support</Link>
            <Link to="/zoo/education">Education</Link>
            <Link to="/zoo/contact">Contact</Link>
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

