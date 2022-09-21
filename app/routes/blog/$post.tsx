import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import {
  Link,
  useLoaderData,
  useCatch,
  useParams,
} from "@remix-run/react";
import type { Post } from "@prisma/client";

import { db } from "~/utils/db.server";

type LoaderData = { post: Post };

export const loader: LoaderFunction = async ({
  params,
}) => {
  const post = await db.post.findUnique({
    where: { id: params.postId },
  });
  if (!post) {
    throw new Response("What a post! Not found.", {
      status: 404,
    });
  }
  const data: LoaderData = { post };
  return json(data);
};

export default function PostRoute() {
  const data = useLoaderData<LoaderData>();

  return (
    <div>
      <p>Here's your hilarious post:</p>
      <p>{data.post.content}</p>
      <Link to=".">{data.post.name} Permalink</Link>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  const params = useParams();
  if (caught.status === 404) {
    return (
      <div className="error-container">
        Huh? What the heck is "{params.postId}"?
      </div>
    );
  }
  throw new Error(`Unhandled error: ${caught.status}`);
}

export function ErrorBoundary() {
  const { postId } = useParams();
  return (
    <div className="error-container">{`There was an error loading post by the id ${postId}. Sorry.`}</div>
  );
}
/*
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
*/