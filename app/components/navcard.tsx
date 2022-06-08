import {
    useActionData,
    useSearchParams,
    Link,
  } from "@remix-run/react";
import Tilt from "react-parallax-tilt";
import { NavCard } from "~/types";

type Icon = {
    icon: string;
}

const RenderIcon = ({icon}: Icon) => {
    return <image />;
};

export const NavCardList = ({ id, title, description, image, navTo}: NavCard) => {
    return (
    <Tilt>
        <div className ="cardwrapper">
            <div className="cardimage">
            <RenderIcon icon={image}/>
            </div>
            <div className="cardtextwrapper">
                <span className="cardtextdate"></span>
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
