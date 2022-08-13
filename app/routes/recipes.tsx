import type {
  LinksFunction,
} from "@remix-run/cloudflare";
import { myRecipes } from "~/components/data";
import { RecipeCardList } from "~/components/recipecard";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/recipes.css";
import React from "react";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', event.currentTarget.id);
  }

  const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text');
    console.log(`Someone dropped an elemenf with id: ${id}`);
  }

    return (
      <div className="container">
        <header className="remix-app__header">
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
          <h1>Recipes</h1>
          <div className="cardcomponentgrid">
              {myRecipes.map(recipe => {
                  return <RecipeCardList key={recipe.id} {...recipe} />;    
              })}
          </div>
          <div>
            <h3>Sunday</h3>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Breakfast</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Morning Snack</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Lunch</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Afternoon Snack</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Dinner</u>
            </div>
          </div>
          <div>
            <h3>Monday</h3>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Breakfast</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Morning Snack</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Lunch</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Afternoon Snack</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Dinner</u>
            </div>
          </div>
          <div>
          <h3>Tuesday</h3>
          <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Breakfast</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Morning Snack</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Lunch</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Afternoon Snack</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Dinner</u>
            </div>
            </div>
          <div>
          <h3>Wednesday</h3>
          <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Breakfast</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Morning Snack</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Lunch</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Afternoon Snack</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Dinner</u>
            </div>
            </div>
          <div>
          <h3>Thursday</h3>
          <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Breakfast</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Morning Snack</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Lunch</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Afternoon Snack</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Dinner</u>
            </div>
          </div>
          <div>
          <h3>Friday</h3>
          <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Breakfast</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Morning Snack</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Lunch</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Afternoon Snack</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Dinner</u>
            </div>
          </div>
          <div>
          <h3>Saturday</h3>
          <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Breakfast</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Morning Snack</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Lunch</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Afternoon Snack</u>
            </div>
            <div onDragOver={enableDropping} onDrop={handleDrop}>
              <u>Dinner</u>
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