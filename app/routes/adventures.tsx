import type {
  LinksFunction,
  MetaFunction,
} from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import stylesUrl from "~/styles/adventures.css";
import { myAdventures } from "~/components/data";
import { CardList } from "~/components/adventurecard";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {
  return (
    <div className="container">
      <header className="remix-app__header">
        <div className="container remix-app__header-content">
          <nav aria-label="Main navigation" className="remix-app__header-nav">
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
            </ul>
          </nav>
        </div>
      </header>
          <div className="cardcomponentgrid">
            {myAdventures.map(adventure => {
                return <CardList key={adventure.id} {...adventure} />;    
            })}
          </div>
          <footer className="remix-app__footer">
        <div className="container remix-app__footer-content">
          <p>&copy; Me</p>
        </div>
      </footer>
    </div>
  );
}
