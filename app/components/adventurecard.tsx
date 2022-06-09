import type {
    LinksFunction,
    MetaFunction,
} from "@remix-run/node";
import Tilt from "react-parallax-tilt";
import { Card } from "~/types";
import stylesUrl from "~/styles/card.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl }];
  };

export const CardList = ({ id, title, description, image, color}: Card) => {
    return (
    <Tilt>
        <div className ="cardwrapper">
            <img className="cardimage" src={image}/>
            <div className="cardtextwrapper">
                <span className="cardtextdate"></span>
                <h2 className="cardtexttitle">{title}</h2>
                <p className="cardtextbody">
                    {description}
                </p>
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
