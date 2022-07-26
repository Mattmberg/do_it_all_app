import type {
  LinksFunction,
} from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/projects.css";

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
            </ul>
          </nav>
        </div>
      </header>
        <div className="content">
          <h1>My Projects</h1>
          <div className="row">
            <div className="column">
              <h2>Deck Builder</h2>
              <p>This was a project I made due to how long it would take to optimize card game decks.</p>
              <ul>
                <li>PHP</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Python(Originally made with this)</li>
              </ul>
              <p><a href="https://github.com/Mattmberg/deck_builder">Repository</a></p>
            </div>
            <div className="column">
              <h2>Voting Charts</h2>
              <p>A project that updates three Chart.JS charts in real time based on the votes sent to the MySQL database.</p>
              <ul>
                <li>PHP</li>
                <li>jQuery</li>
                <li>Javascript</li>
                <li>Bootstrap</li>
                <li>AJAX</li>
                <li>MySQL</li>
              </ul>
              <p><a href="https://github.com/Mattmberg/voting_charts">Repository</a></p>
            </div>
            <div className="column">
              <h2>Dinner Roulette</h2>
              <p>This project was to help alleviate the situations where there is indecision on what the dinners should be for the week.</p>
              <ul>
                <li>Python</li>
              </ul>
              <p><a href="https://github.com/Mattmberg/dinner_roulette">Repository</a></p>
            </div>
            <div className="column">
              <h2>Personal Website</h2>
              <p>This webapp is made with the new Full Stack React Framework Remix JS.</p>
              <ul>
                <li>React</li>
                <li>Remix</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
        </div>
        <footer>
        <div>
          <p>&copy; Me</p>
        </div>
      </footer>
      </div>
    );
  }