import type {
    LinksFunction,
    MetaFunction,
} from "@remix-run/cloudflare";
import Tilt from "react-parallax-tilt";
import { Recipe } from "~/types";
import stylesUrl from "~/styles/card.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl }];
  };

export const RecipeCardList = ({ id, title, description, ingredients}: Recipe) => {
    const listItems = ingredients.map((ingredient) => <li>{ingredient}</li>)
    return (
    <Tilt>
        <div className ="cardwrapper">
            <div className="cardtextwrapper">
                <span className="cardtextdate"></span>
                <h2 className="cardtexttitle">{title}</h2>
                <p className="cardtextbody">
                    {description}
                </p>
                <ul>{listItems}</ul>
            </div>
            <div className="cardstatwrapper">
                <div className="cardstats">
                    <a className="linktext" href="https://www.linkedin.com/in/matthew-bergeron-jr-cs/">LinkedIn</a>
                </div>
                <div className="cardstats">
                    <a className="linktext" href="https://github.com/Mattmberg">Github</a>
                </div>
            </div>
        </div>
    </Tilt>
    );
};