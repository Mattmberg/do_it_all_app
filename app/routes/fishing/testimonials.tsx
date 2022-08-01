import type {
    LinksFunction,
} from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import stylesUrl from "~/styles/testimonials.css";
import { ReviewCard } from "~/components/reviewcard";
import { myReviews } from "~/components/data";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {
    return (
      <div className="container">
        <header>
            <div className="logoLink">
            <Link to="/fishing">Logo</Link>
            </div>
            <div className="links">
            <Link to="/fishing">Home</Link>
            <Link to="/fishing/charter">Charter Rates/Information</Link>
            <Link to="/fishing/testimonials">Testimonials</Link>
            <Link to="/fishing/about-fishing">About Us</Link>
            </div>
        </header>
        <div className="content">
            <h1><u>Testimonials</u></h1>

        <div className="cardcomponentgrid">
            {myReviews.map(reviews => {
                return <ReviewCard key={reviews.id} {...reviews} />;    
            })}
        </div>
            

        </div>
        <footer>
            <div className="footerLinks">
                <p>Facebook Twitter Instagram Icon Spots - Everything on this page is demo only.</p>
            </div>
        </footer>
      </div>
      );
  };