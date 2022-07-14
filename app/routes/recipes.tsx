import type {
  LinksFunction,
} from "@remix-run/cloudflare";
import { myRecipes } from "~/components/data";
import { RecipeCardList } from "~/components/recipecard";

import stylesUrl from "~/styles/recipes.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {
    return (
      <div className="container">
          <h1>Recipes</h1>
          <div className="cardcomponentgrid">
              {myRecipes.map(recipe => {
                  return <RecipeCardList key={recipe.id} {...recipe} />;    
              })}
          </div>
      </div>
    );
  }