import type {
  LinksFunction,
} from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import { useState } from "react";

import stylesUrl from "~/styles/purchasegoals.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {

  const [toAdd, setToAdd] = useState({
    target_amount: 0,
    monthly_savings: 0,
    months_to_goal: 0,
  });

  const onSubmit = (e) => {
    e.preventDefault();

    toAdd.months_to_goal = toAdd.target_amount / toAdd.monthly_savings
  };

  const handleChange = (e) => {
    setToAdd({ ...toAdd, [e.target.name]: e.target.value });
  };


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
          <h1>Purchasing Goal Calculator</h1>
          <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="target_amount">What is your target goal you are looking to hit?</label>
                <input type="number" name="target_amount" placeholder="Your Target Price" value={toAdd.target_amount} onChange={handleChange} required/>
                <label htmlFor="monthly_savings">How much will you be putting away per month to achieve the desired amount?</label>
                <input type="number" name="monthly_savings" placeholder="Your Monthly Savings Toward Goal" value={toAdd.monthly_savings} onChange={handleChange}/>
                <button type="submit">Add Together</button>
            </form>
          </div>
          <div>
            <p>It will take you about {toAdd.months_to_goal} months to hit your goal.</p>
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