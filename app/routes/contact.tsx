import type {
    LinksFunction,
  } from "@remix-run/cloudflare";
  import stylesUrl from "~/styles/index.css";
  import { myNavCards } from "~/components/data";
  import { NavCard } from "~/types";
  import { NavCardList } from "~/components/navcard";
  import { Link } from "@remix-run/react";
import React, { useState, useRef } from "react";
import emailjs from 'emailjs-com';

  export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl, }];
  };

  export default function Index() {
    const form = useRef();

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {

      e.preventDefault();

      emailjs.sendForm(
        "serviceID",
        "templateID",
        e.currentTarget,
        "userID",
      )
      .then((response) => {
        console.log('Success!', response.status, response.text);
      })
      .catch((err) => {
        console.log('Failed...', err);
      });
      e.currentTarget.reset();
    };

    return (
      <div className="container">
        <header>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/matthew-bergeron-jr-cs/">LinkedIn</a>
                </li>
                <li>
                  <a href="https://github.com/Mattmberg">GitHub</a>
                </li>
                <li>
                  <Link to="/pokemon">Catch a Pokemon</Link>
                </li>
                <li>
                  <Link to="/fishing">Charter Business Demo</Link>
                </li>
                <li>
                  <Link to="/onlinestore">Online Store Demo</Link>
                </li>
                <li>
                  <Link to="/restaurant">Restaurant Demo</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Me</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
            <main>
              <form onSubmit={sendEmail}>
                <input type="text" name="from_name" placeholder="Your Name"/>
                <input type="text" name="to_name" placeholder="To Me"/>
                <input type="text" name="message" placeholder="Your Message"/>
                <input type="text" name="reply_to" placeholder="Your Email"/>
                <button type="submit" value="Send">Submit</button>
              </form>
            </main>
          <footer>
            <div>
              <p>&copy; Me</p>
            </div>
        </footer>
      </div>
    );
  }
  