import type {
  LinksFunction,
} from "@remix-run/node";

import stylesUrl from "~/styles/projects.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {
    return (
      <div className="container">
        <div className="header">
        </div>
        <div className="content">
          <h1>My Projects</h1>
        </div>
        <div className="footer">
        </div>
      </div>
    );
  }