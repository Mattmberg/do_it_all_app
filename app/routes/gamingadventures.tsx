import type {
    LinksFunction,
    MetaFunction,
  } from "@remix-run/cloudflare";
  import { Link } from "@remix-run/react";
  import stylesUrl from "~/styles/gamingadventures.css";
  import { myGamingAdventures } from "~/components/data";
  import { CardList } from "~/components/adventurecard";
  
  export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl, }];
  };
  
  export default function Index() {
    return (
      <div className="container">
            <div className="cardcomponentgrid">
              {myGamingAdventures.map(gamingadventure => {
                  return <CardList key={gamingadventure.id} {...gamingadventure} />;    
              })}
            </div>
      </div>
    );
  }
  