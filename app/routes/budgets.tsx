import type {
  LinksFunction,
} from "@remix-run/cloudflare";

import stylesUrl from "~/styles/budgets.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {
    return (
      <div className="container">
        <div className="header">
        </div>
        <div className="content">
          <h1>Budget Tracking</h1>
        </div>
        <div className="footer">
        </div>
      </div>
    );
  }