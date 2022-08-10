import type {
  LinksFunction,
} from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import { useState } from "react";

import stylesUrl from "~/styles/budgets.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {

  const [amount, setAmount] = useState({
    net_income: 0,
    expenses: 0,
  });

  const [sum, setSum] = useState({
    left_over_amount: 0,
  });
  const [submit, submitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSum({
      left_over_amount: amount.net_income -  amount.expenses
    });
    submitted(true);
  };

  const handleChange = (e) => {
    setAmount({ ...amount, [e.target.name]: e.target.value });
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
          <h1>Budget Tracking</h1>
          <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="net_income">What is your net income?</label><br/>
                <input type="number" name="net_income" placeholder="Your Target Price" value={amount.net_income} onChange={handleChange} required/><br/><br/>
                <label htmlFor="expenses">What is your total expense amount?</label><br/>
                <input type="number" name="expenses" placeholder="Your Monthly Savings Toward Goal" value={amount.expenses} onChange={handleChange}/><br/><br/>
                <button type="submit">Add Together</button>
            </form>
            <div>
            <p>You will have {sum.left_over_amount} left to spend after your expenses.</p>
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