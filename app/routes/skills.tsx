import type {
  LinksFunction,
} from "@remix-run/node";

import stylesUrl from "~/styles/skills.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {
    return (
      <div className="container">
        <div className="header">
        </div>
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
              XML
            </li>
            <li>
              Prisma
            </li>
          </ul>
          </div>
          <div className="interpersonalskillscolumn">
            <h2>Interpersonal Skills</h2>
          <li>
            Self-management
          </li>
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
          </div>
          </div>
        </div>
        <div className="footer">
        </div>
      </div>
    );
  }