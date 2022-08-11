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
  });

  const [expense, setExpense] = useState({
    entertainment_expense: 0,
    utility_expense: 0,
    housing_expense: 0,
    food_expense: 0,
  })

  const [sum, setSum] = useState({
    expenses: 0,
    left_over_amount: 0,
  });
  const [submit, submitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSum({
      expenses: expense.entertainment_expense + expense.utility_expense + expense.housing_expense + expense.food_expense,
      left_over_amount: amount.net_income - sum.expenses,
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
                <input type="number" name="net_income" placeholder="Your Net Income" value={amount.net_income} onChange={handleChange} required/><br/><br/>
                <label htmlFor="entertainment_expense">How much do you spend on entertainment per month?</label><br/>
                <input type="number" name="entertainment_expense" placeholder="Entertainment Expense" value={amount.net_income} onChange={handleChange} required/><br/><br/>
                <label htmlFor="utility_expense">How much do you spend on utilities per month?</label><br/>
                <input type="number" name="utility_expense" placeholder="Utility Expense" value={amount.net_income} onChange={handleChange} required/><br/><br/>
                <label htmlFor="housing_expense">How much do you spend on housing per month?</label><br/>
                <input type="number" name="housing_expense" placeholder="Housing Expense" value={amount.net_income} onChange={handleChange} required/><br/><br/>
                <label htmlFor="food_expense">How much do you spend on food per month?</label><br/>
                <input type="number" name="food_expense" placeholder="Food Expense" value={amount.net_income} onChange={handleChange} required/><br/><br/>
                <button type="submit">Calculate Spending Amount</button>
            </form>
            <div>
            <p>You will have ${sum.left_over_amount} dollars left to spend after your expenses.</p>
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