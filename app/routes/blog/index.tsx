import { LinksFunction, json } from "@remix-run/cloudflare";
import { Link, useSearchParams, Form, useSubmit, useLoaderData} from "@remix-run/react";
import stylesUrl from "~/styles/blog.css";
import axios from 'axios';

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl, }];
};

/*type LoaderData = {
    data: Awaited<ReturnType<typeof getCountPosts>>;
};
  
export const loader = async () => {
    return json<LoaderData>({
      data: await getCountPosts(),
    });
};  */

/*export let loader = async ({ request }) => {
    let url = new URL(request.url);
    let searchTerm = url.searchParams.get("searchTerm");
    let filter = JSON.parse(url.searchParams.get("filter"));
    
    
    let pipeline = [];
    if (searchTerm) {
        pipeline = [
            {
                $search: {
                    text: {
                        query: searchTerm,
                        path: {
                            wildcard: "*"
                        }
                    }
                }
            },
            { $limit: 10 },
            { $addFields: { meta: "$$SEARCH_META" } }
        ];
    } else if (filter) {
        pipeline = [
            {
                $match: filter
            },
            { $limit: 10 }
        ];
    } else {
        pipeline = [{ $limit: 10 }];
    }

    let data = JSON.stringify({
        collection: "posts",
        database: "personal_website",
        dataSource: process.env.CLUSTER_NAME,
        pipeline
    });

    let config = {
        method: 'post',
        url: `${process.env.DATA_API_BASE_URL}/action/aggregate`,
        headers: {
            'Content-Type':  'application/json',
            'Access-Control-Request-Headers': '*' ,
            'api-key': process.env.DATA_API_KEY,
        },
        data
    };

    let posts = await axios(config);
    let totalFound = filter ? await getCountPosts(filter) : await getCountPosts();

    return {
        showCount: posts?.data?.documents?.length,
        totalCount: totalFound,
        documents: posts?.data?.documents
    };
};

const getCountPosts = async (countFilter) => {
    let pipeline = countFilter ?
        [{ $match: countFilter }, { $count: "count" } ] :
        [{ $count: "count" }];

    let data = JSON.stringify({
        collection: "posts",
        database: "personal_website",
        dataSource: process.env.CLUSTER_NAME,
        pipeline
    });
    
    let config = {
        method: 'post',
        url: `${process.env.DATA_API_BASE_URL}/action/aggregate`,
        headers: {
            'Content-Type':  'application/json',
            'Access-Control-Request-Headers': '*' ,
            'api-key': process.env.DATA_API_KEY,
        },
        data
    };

    let result = await axios(config);

    return result?.data?.documents[0].count;

} */

export default function Index() {
    let [searchParams, setSearchParams] = useSearchParams();
    let submit = useSubmit();
    let posts = useLoaderData();

    return (
      <div className="container">
        <header>
        <div>
        <Link to="/">Home</Link>
            <Link to="/"></Link>
            <Link to="/"></Link>
            <Link to="/"></Link>
            <Link to="/"></Link>
            <Link to="/"></Link>
            <Link to="/"></Link>
          </div>
        </header>
        <div className="content">
            <h1>My Blog</h1>
        </div>
        <footer>
            <div className="footerLinks">
                <p>Facebook Twitter Instagram Icon Spots - Everything on this page is demo only.</p>
            </div>
        </footer>
      </div>
      );
  };
