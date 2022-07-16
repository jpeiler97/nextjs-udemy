export default function NotFoundPage() {
  return (
    <div>
      <h1>Page not found</h1>
    </div>
  );
}

/* Notes:
- To create a "404" page, simple create a file on the base level of the pages directory which
Next.JS will automatically render if the user navigates to a non-existent page.
- This also can be achieved with any given error code, e.g. 401, 403, etc.

*/
