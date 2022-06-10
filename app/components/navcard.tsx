import {
    useActionData,
    useSearchParams,
    Link,
  } from "@remix-run/react";
import Tilt from "react-parallax-tilt";
import { NavCard } from "~/types";

export const NavCardList = ({ id, title, description, image, navTo}: NavCard) => {
    return (
    <Tilt>
        <div className ="cardwrapper">
            <div className="cardtextwrapper">
                <div></div>
                <h2 className="cardtexttitle">{title}</h2>
                <p className="cardtextbody">
                    {description}
                </p>
            </div>
            <div className="cardstatwrapper">
                <div className="cardstats" style={{textTransform: "capitalize"}}>
                    <Link to={`/${navTo}`}>{navTo}</Link>
                </div>
            </div>
        </div>
    </Tilt>
    );
};
