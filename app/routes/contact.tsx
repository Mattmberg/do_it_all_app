import type {
    LinksFunction,
  } from "@remix-run/cloudflare";
  import stylesUrl from "~/styles/index.css";
  import { myNavCards } from "~/components/data";
  import { NavCard } from "~/types";
  import { NavCardList } from "~/components/navcard";
  import { Link } from "@remix-run/react";
  
  export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl, }];
  };
  
  export default function Index() {
    return (
      <div className="container">
        <header>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/matthew-bergeron-jr-cs/">LinkedIn</a>
                </li>
                <li>
                  <a href="https://github.com/Mattmberg">GitHub</a>
                </li>
                <li>
                  <Link to="/pokemon">Catch a Pokemon</Link>
                </li>
                <li>
                  <Link to="/fishing">Charter Business Demo</Link>
                </li>
                <li>
                  <Link to="/onlinestore">Online Store Demo</Link>
                </li>
                <li>
                  <Link to="/restaurant">Restaurant Demo</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Me</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
            <div className="cardcomponentgrid">
              {myNavCards.map(navcards => {
                  return <NavCardList key={navcards.id} {...navcards} />;    
              })}
            </div>
          <footer>
            <div>
              <p>&copy; Me</p>
            </div>
        </footer>
      </div>
    );
  }
  