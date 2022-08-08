import type {
    LinksFunction,
  } from "@remix-run/cloudflare";
  import stylesUrl from "~/styles/contact.css";
  import { myNavCards } from "~/components/data";
  import { NavCard } from "~/types";
  import { NavCardList } from "~/components/navcard";
  import { Link } from "@remix-run/react";
import React, { useState, useRef } from "react";
import { send } from 'emailjs-com';

  export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl, }];
  };

  export default function Index() {
    const [toSend, setToSend] = useState({
      from_name: '',
      to_name: 'Matthew Bergeron Jr.',
      message: '',
      reply_to: '',
    });

    const onSubmit = (e) => {
      e.preventDefault();

      send(
        'service_fdu03pi',
        'template_2ybg5d4',
        toSend,
        '-bdoVPp3_HUK1vxkp',
      )
      .then((response) => {
        console.log('Success!', response.status, response.text);
      })
      .catch((err) => {
        console.log('Failed...', err);
      });
    };

    const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
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
              <form onSubmit={onSubmit}>
                <input type="text" name="from_name" placeholder="Your Name" value={toSend.from_name} onChange={handleChange} required/>
                <input type="hidden" name="to_name" placeholder="To Me" value={toSend.to_name} onChange={handleChange}/>
                <textarea name="message" placeholder="Your Message" value={toSend.message} onChange={handleChange} style={{height:"200px"}} required/>
                <input type="text" name="reply_to" placeholder="Your Email" value={toSend.reply_to} onChange={handleChange} required/>
                <button type="submit">Submit</button>
              </form>
            </main>
          <footer>
              <p>&copy; Me</p>
        </footer>
      </div>
    );
  }
  