import type {
  LinksFunction,
} from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/skills.css";

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
        <div className="content">
          <h1>My Skills</h1>
          <div className="listsrow">
          <div className="technicalskillscolumn">
            <h2>Technical Skills</h2>
          <ul>
            <li>
              React
            </li>
            <li>
              Typescript
            </li>
            <li>
              Remix
            </li>
            <li>
              Microsoft Sql Server
            </li>
            <li>
              Postgresql
            </li>
            <li>
              MySQL
            </li>
            <li>
              Javascript
            </li>
            <li>
              Bootstrap
            </li>
            <li>
              Git
            </li>
            <li>
              Node.js
            </li>
            <li>
              PHP
            </li>
            <li>
              HTML
            </li>
            <li>
              jQuery
            </li>
            <li>
              CSS
            </li>
            <li>
              MongoDB
            </li>
            <li>
              XML
            </li>
            <li>
              Python
            </li>
            <li>
              Prisma
            </li>
            <li>
              Golang
            </li>
            <li>
              Classic ASP
            </li>
            <li>
              .Net
            </li>
            <li>
              C++
            </li>
          </ul>
          </div>
          <div className="interpersonalskillscolumn">
            <h2>Interpersonal Skills</h2>
          <li>
            Thoughtfulness
          </li>
          <li>
            Adaptability
          </li>
          <li>
            Communication
          </li>
          <li>
            Problem solving
          </li>
          <li>
            Organization
          </li>
          <li>
            Time management
          </li>
          <li>
            Negotiating through Conflict
          </li>
          <li>
            Open-mindedness
          </li>
          <li>
            Active listening
          </li>
          </div>
          </div>
        </div>
        <footer>
          <p>&copy; Me</p>
      </footer>
      </div>
    );
  }