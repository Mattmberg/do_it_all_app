import type {
  LinksFunction,
} from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import { CatchValue } from "@remix-run/react/transition";
import { useState, useEffect } from "react";

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
  });

  const expenses = Number(expense.entertainment_expense) + Number(expense.food_expense) + Number(expense.housing_expense) + Number(expense.utility_expense);

  const [sum, setSum] = useState({
    left_over_amount: 0,
  });

  const [submit, submitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSum({
      left_over_amount: amount.net_income - expenses,
    });
    submitted(true);
  };

    const handleChange = (e) => {
    setAmount({ ...amount, [e.target.name]: e.target.value });
    setExpense({ ...expense, [e.target.name]: e.target.value });
    }

    return (
      <div className="container">
      <header>
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
      </header>
        <div className="content">
          <h1>Budget Tracking</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="net_income">What is your net income?</label><br/>
                <input type="number" name="net_income" placeholder="Your Net Income" value={amount.net_income} onChange={handleChange} required/><br/><br/>
                <label htmlFor="entertainment_expense">How much do you spend on entertainment per month?</label><br/>
                <input type="number" name="entertainment_expense" placeholder="Entertainment Expense" value={expense.entertainment_expense} onChange={handleChange} required/><br/><br/>
                <label htmlFor="utility_expense">How much do you spend on utilities per month?</label><br/>
                <input type="number" name="utility_expense" placeholder="Utility Expense" value={expense.utility_expense} onChange={handleChange} required/><br/><br/>
                <label htmlFor="housing_expense">How much do you spend on housing per month?</label><br/>
                <input type="number" name="housing_expense" placeholder="Housing Expense" value={expense.housing_expense} onChange={handleChange} required/><br/><br/>
                <label htmlFor="food_expense">How much do you spend on food per month?</label><br/>
                <input type="number" name="food_expense" placeholder="Food Expense" value={expense.food_expense} onChange={handleChange} required/><br/><br/>
                <button type="submit">Calculate Spending Amount</button>
            </form>
            <p>You will have ${sum.left_over_amount} dollars left to spend after your expenses.</p>
          </div>
        <footer>
          <p>&copy; Me</p>
      </footer>
      </div>
    );
  }
