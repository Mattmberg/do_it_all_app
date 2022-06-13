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
              <p><a href="https://github.com/Mattmberg/deck_builder"></a>Repository</p>
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
              <p><a href="https://github.com/Mattmberg/voting_charts"></a>Repository</p>
            </div>
            <div className="column">
              <h2>Dinner Roulette</h2>
              <p>This project was to help alleviate the situations where there is indecision on what the dinners should be for the week.</p>
              <ul>
                <li>Python</li>
              </ul>
              <p><a href="https://github.com/Mattmberg/dinner_roulette"></a>Repository</p>
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
        <div className="footer">
        </div>
      </div>
    );
  }