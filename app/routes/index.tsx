import type {
  LinksFunction,
} from "@remix-run/node";
import stylesUrl from "~/styles/index.css";
import { myNavCards } from "~/components/data";
import { NavCard } from "~/types";
import { NavCardList } from "~/components/navcard";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {
  return (
    <div className="container">
      <div className="header">
      </div>
          <div className="cardcomponentgrid">
            {myNavCards.map(navcards => {
                return <NavCardList key={navcards.id} {...navcards} />;    
            })}
          </div>
      <div className="footer">
      </div>
    </div>
  );
}
