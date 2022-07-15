export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
}

/* Notes:

- Next.js sees index.js in the top-level of the pages directory as the root page of the app.
  Whatever component is in this file will be rendered when a user navigates to "https://[baseURL]/ without
  any additional paths.

*/
