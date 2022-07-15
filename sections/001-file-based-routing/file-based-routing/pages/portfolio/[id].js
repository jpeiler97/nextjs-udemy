import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
  const router = useRouter();

  return (
    <div>
      <h1>Portfolio project page {router.query.id}</h1>
    </div>
  );
}

/* Notes:
    - Next.Js will see any file with square brackets as an indicator that what to render
    is dependent on a unique identifier, added as a query into the URL (e.g. 'https://[baseURL]/portfolio/1')
    - Even if no special data is passed to the component, it will still render the page, as long as the
    param doesn't match an existing path, say, '/list' which exists in the directory already
    - useRouter is a hook which provides an object that allows us to get data based on the url query.
      We use router.query to access the value that's encoded in the url.
*/
