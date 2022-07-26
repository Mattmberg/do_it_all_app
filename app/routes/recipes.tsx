import type {
  LinksFunction,
} from "@remix-run/cloudflare";
import { myRecipes } from "~/components/data";
import { RecipeCardList } from "~/components/recipecard";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/recipes.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {
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
          <footer>
        <div>
          <p>&copy; Me</p>
        </div>
      </footer>
      </div>
    );
  }