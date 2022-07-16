import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
}

/* Notes:

- Next.js sees index.js in the top-level of the pages directory as the root page of the app.
  Whatever component is in this file will be rendered when a user navigates to "https://[baseURL]/ without
  any additional paths.

- using a typical <a> tag will send an HTTP request to load a page, which is something to avoid, as state
on that page will be lost. This can be solved using the Link component which acts very similarly to an
<a> tag. Another useful feature of Link is that it can pre-fetch data of the page it will navigate to as
soon as the Link is hovered over.

*/
