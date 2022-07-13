import type {
  LinksFunction,
  MetaFunction,
} from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import stylesUrl from "~/styles/adventures.css";
import { myAdventures } from "~/components/data";
import { CardList } from "~/components/adventurecard";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {
  return (
    <div className="container">
          <div className="cardcomponentgrid">
            {myAdventures.map(adventure => {
                return <CardList key={adventure.id} {...adventure} />;    
            })}
          </div>
    </div>
  );
}
