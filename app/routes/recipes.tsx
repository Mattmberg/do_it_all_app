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
        <header>
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
      </header>
      <main>
          <h1>Recipes</h1>
          <div className="cardcomponentgrid">
              {myRecipes.map(recipe => {
                  return <RecipeCardList key={recipe.id} {...recipe} />;    
              })}
          </div>
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Sunday</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Monday</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Tuesday</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Wednesday</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Thursday</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Friday</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Saturday</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th>Breakfast</th>
                <th>Morning Snack</th>
                <th>Lunch</th>
                <th>Afternoon Snack</th>
                <th>Dinner</th>
                <th>Breakfast</th>
                <th>Morning Snack</th>
                <th>Lunch</th>
                <th>Afternoon Snack</th>
                <th>Dinner</th>
                <th>Breakfast</th>
                <th>Morning Snack</th>
                <th>Lunch</th>
                <th>Afternoon Snack</th>
                <th>Dinner</th>
                <th>Breakfast</th>
                <th>Morning Snack</th>
                <th>Lunch</th>
                <th>Afternoon Snack</th>
                <th>Dinner</th>
                <th>Breakfast</th>
                <th>Morning Snack</th>
                <th>Lunch</th>
                <th>Afternoon Snack</th>
                <th>Dinner</th>
                <th>Breakfast</th>
                <th>Morning Snack</th>
                <th>Lunch</th>
                <th>Afternoon Snack</th>
                <th>Dinner</th>
                <th>Breakfast</th>
                <th>Morning Snack</th>
                <th>Lunch</th>
                <th>Afternoon Snack</th>
                <th>Dinner</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
                <td  onDragOver={enableDropping} onDrop={handleDrop}></td>
              </tr>
            </tbody>
          </table>
          </main>
        <footer>
          <p>&copy; Me</p>
        </footer>
      </div>
    );
  }