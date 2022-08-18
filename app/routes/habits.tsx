import type {
  LinksFunction,
} from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import { useState } from "react";

import stylesUrl from "~/styles/habits.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {

  const [goal, setGoal] = useState({
    habit_one: "",
    habit_one_goal: 0,
    habit_one_done: 0,
  });

  const [sum, setSum] = useState({
    goal_achieved: "",
  });
  const [submit, submitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    
      if (goal.habit_one_goal <= goal.habit_one_done) {
        setSum({
          goal_achieved: "You hit your goal this week!"
        });
      } else {
        setSum({
          goal_achieved: "You didn't hit your goal this week, but try again next week!"
        });
      }
    submitted(true);
  };

  const handleChange = (e) => {
    setGoal({ ...goal, [e.target.name]: e.target.value });
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
          <h1>Habit Tracker</h1>
          <form onSubmit={onSubmit}>
                <label htmlFor="habit_one">What habit would you like to track?</label><br/>
                <input type="text" name="habit_one" placeholder="Habit To Track" value={goal.habit_one} onChange={handleChange} required/><br/><br/>
                <label htmlFor="habit_one_goal">How many days of the week would you like to be doing this habit per week?</label><br/>
                <input type="number" name="habit_one_goal" placeholder="Weekly Habit Goal" value={goal.habit_one_goal} onChange={handleChange}/><br/><br/>
                <label htmlFor="habit_one_done">How many days of the week would you like to be doing this habit per week?</label><br/>
                <input type="number" name="habit_one_done" placeholder="How many times did you achieve your goal?" value={goal.habit_one_done} onChange={handleChange}/><br/><br/>
                <button type="submit">Add Together</button>
            </form>
            <div>
            <p>{sum.goal_achieved}</p>
          </div>
        </div>
        <footer>
          <p>&copy; Me</p>
      </footer>
      </div>
    );
  }