export default function ListPage() {
  return (
    <div>
      <h1>List page</h1>
    </div>
  );
}

/* Notes:
    - Creating this file with a unique name on the same level as index.js inside
    '/portfolio' creates a nested url path. Next.JS will render this component when
    the user navigates to 'https://[baseURL]/portfolio/list', which wouldn't be possible
    without creating a directory with the name 'portfolio', and within it an index.js and
    a uniquely named file.


*/
