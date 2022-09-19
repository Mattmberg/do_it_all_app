import { LinksFunction, LoaderFunction, json } from "@remix-run/cloudflare";
import { useLoaderData, useParams, Link } from "@remix-run/react";
const axios = require('axios');
import stylesUrl from "~/styles/post.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl, }];
};

export let loader = async ({ params }) => {
  let data = JSON.stringify({
    collection: "posts",
    database: "personal_website",
    dataSource: process.env.CLUSTER_NAME,
    filter: { title: params.title }
  });

  let config = {
    method: 'post',
    url: process.env.DATA_API_BASE_URL + '/action/findOne',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': process.env.DATA_API_KEY
    },
    data
  };
  
  let result = await axios(config);
  let post = result?.data?.document || {};

  return {
    title: params.title,
    content: post.content
  };
};

export default function PostSlug() {
  const { post } = useLoaderData();
  return (
    <main className="mx-auto max-w-4xl">
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
            </ul>
          </nav>
        </div>
      </header>
      <div className="pokemonCard">
        <div className="cardtitle">
        <h1 className="my-6 border-b-2 text-center text-3xl">
            { post.title }
        </h1>
        </div>
        <div className="cardimage">
        </div>
        <div className="cardstats">
            { post.content }
        </div>
      </div>
      <footer>
          <div>
            <p>&copy; Me</p>
          </div>
      </footer>
    </main>
  );
}