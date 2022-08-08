import type {
    LinksFunction,
} from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/restaurant.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl, }];
};

export default function Index() {
    return (
      <div className="container">
        <header>
            <div className="logoLink">
            <Link to="/restaurant">Logo</Link>
            </div>
            <div className="links">
            <Link to="/restaurant/onlineorder">Order Online</Link>
            <Link to="/restaurant/menu">Menu</Link>
            <Link to="/restaurant/locations">Locations</Link>
            <Link to="/restaurant/catering">Catering</Link>
            <Link to="/restaurant/careers">Careers</Link>
            <Link to="/restaurant/contact">Contact Us</Link>
            </div>
        </header>
        <main>
              <h1>Contact Us</h1>

              <p>If you have any comments, concerns, or suggestions- feel free to email us here or call our help line at xxx-xxx-xxxx</p>

              <form>
                <input type="text" name="from_name" placeholder="Your Name" required/>
                <input type="hidden" name="to_name" placeholder="To Me"/>
                <textarea name="message" placeholder="Your Message" style={{height:"200px"}} required/>
                <input type="text" name="reply_to" placeholder="Your Email" required/>
                <button type="submit" disabled>Submit</button>
              </form>
            </main>
        <footer>
            <div className="footerLinks">
                <p>Facebook Twitter Instagram Icon Spots - Everything on this page is demo only.</p>
            </div>
        </footer>
      </div>
      );
  };