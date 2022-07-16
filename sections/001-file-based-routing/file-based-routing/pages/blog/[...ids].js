import { useRouter } from "next/router";

export default function BlogPostsPage() {
  const router = useRouter();
  const { query } = router;
  const { ids } = query;

  return (
    <div>
      <h1>
        Blog posts {ids[0]} {ids[1]}
      </h1>
    </div>
  );
}

/* Notes:
    - A Catch-all route can be created in Next.js using special syntax for the file name, similar
    to a typical dynamic route. Inside the brackets, before the name of the query param, insert '...'
    as if using a spread operator (e.g. '[...id].js')
    - instead of taking a single query, Next.js will now see the query as an array, each item in the array
    put in order of how it's passed in the url. E.g. if the path is '/blogs/jp/1', useRouter will set the
    query object as { ids: ['jp', 1] }
    - this is useful if say you want to display blog posts from a given year and month, which could be
    passed into the url as '/blog/2022/7', and ids[0] and ids[1] respectively will be 2022 and 7
*/
