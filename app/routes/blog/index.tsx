import type {
    LinksFunction,
    LoaderFunction,
  } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
  import type { Post } from "@prisma/client";
  import {
    Link,
    Outlet,
    useLoaderData,
    useSubmit,
    useSearchParams,
  } from "@remix-run/react";
  
  import { db } from "~/utils/db.server";
  import stylesUrl from "~/styles/blog.css";
  
  export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl }];
  };
  
  type LoaderData = {
    postListItems: Array<Post>;
  };
  
  export const loader: LoaderFunction = async () => {
    const data: LoaderData = {
      postListItems: await db.post.findMany({
        take: 5,
        select: { id: true, name: true },
        orderBy: { createdAt: "desc" },
      }),
    };
    return json(data);
  };
  
  export default function Index() {
    let [searchParams, setSearchParams] = useSearchParams();
    let submit = useSubmit();
    const data = useLoaderData<LoaderData>();
  
    return (
      <div className="container">
        <header>
        <Link to="/">Home</Link>
            <Link to="/"></Link>
            <Link to="/"></Link>
            <Link to="/"></Link>
            <Link to="/"></Link>
            <Link to="/"></Link>
            <Link to="/"></Link>
        </header>
        <main className="content">
          <div className="container">
            <div className="posts-list">
              <Link to=".">Get a random post</Link>
              <p>Here are a few more posts to check out:</p>
              <ul>
                {data.postListItems.map((post) => (
                  <li key={post.id}>
                    <Link to={post.id}>{post.name}</Link>
                  </li>
                ))}
              </ul>
              <Link to="new" className="button">
                Add your own
              </Link>
            </div>
            <div className="posts-outlet">
              <Outlet />
            </div>
          </div>
        </main>
        <footer>
            <div className="footerLinks">
                <p>Facebook Twitter Instagram Icon Spots - Everything on this page is demo only.</p>
            </div>
        </footer>
      </div>
    );
};
