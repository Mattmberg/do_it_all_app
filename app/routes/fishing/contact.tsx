import type {
    LinksFunction,
} from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/contact-fishing.css";

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
            <Link to="/fishing/newsletter">Newsletter</Link>
            <Link to="/fishing/contact">Contact Us</Link>
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